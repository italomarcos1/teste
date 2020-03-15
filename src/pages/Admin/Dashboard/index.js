import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaRegTimesCircle,
} from 'react-icons/fa';
import Header from '../../../components/Header';

import { store } from '../../../store';
import { Container, Content, Item } from './styles';

import api from '../../../services/api';
import history from '../../../services/history';

export default function Dashboard() {
  const { signed, token } = store.getState().auth;
  const [data, setData] = useState([]);

  if (!signed || token === null) {
    history.push('/login');
  }

  useEffect(() => {
    async function loadData() {
      const response = await api.get('data');
      const formattingDate = response.data.map(value => ({
        ...value,
        createdAt: format(parseISO(value.createdAt), "d 'de' MMMM 'de' yyyy", {
          locale: pt,
        }),
        updatedAt: format(parseISO(value.updatedAt), "d 'de' MMMM 'de' yyyy", {
          locale: pt,
        }),
      }));
      setData(formattingDate);
    }

    loadData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <header>Dados da Pesquisa</header>

        <Content>
          <div>
            <span>
              <strong>Nome</strong>
            </span>
            <span>
              <strong>Telefone</strong>
            </span>
            <span>
              <strong>Conheceu</strong>
            </span>
            <span>
              <strong>Redes</strong>
            </span>
            <span>
              <strong>Quais?</strong>
            </span>
            <span>
              <strong>Data de envio</strong>
            </span>
            <span>
              <strong>Atualizou</strong>
            </span>
          </div>
          <ul>
            {data.map(user => (
              <Item key={user.id}>
                <span>
                  {user.name} {user.last_name}
                </span>
                <span>{user.phone_number}</span>
                <span>{user.got_to_know}</span>
                <span>{user.has_social ? 'Sim' : 'Não'}</span>
                {user.social_media ? (
                  <span>
                    <div>
                      <FaFacebookSquare
                        color={user.social_media[0] ? '#e6b32a' : '#aaa'}
                        opacity={user.social_media[0] ? 1 : 0.6}
                        size={20}
                      />
                      <FaInstagram
                        color={user.social_media[1] ? '#e6b32a' : '#aaa'}
                        opacity={user.social_media[1] ? 1 : 0.6}
                        size={20}
                      />
                      <FaLinkedinIn
                        color={user.social_media[2] ? '#e6b32a' : '#aaa'}
                        opacity={user.social_media[2] ? 1 : 0.6}
                        size={20}
                      />
                    </div>
                  </span>
                ) : (
                  <span>
                    <div>
                      <FaRegTimesCircle color="#e6b32a" size={20} />
                    </div>
                  </span>
                )}
                <span>{user.createdAt}</span>
                <span>
                  {user.updatedAt !== user.createdAt ? user.updatedAt : '-'}
                </span>
              </Item>
            ))}
          </ul>
        </Content>
      </Container>
    </>
  );
}
