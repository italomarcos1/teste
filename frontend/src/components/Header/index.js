import React from 'react';
import { useDispatch } from 'react-redux';

import { FaDoorOpen } from 'react-icons/fa';
import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  function handleLogOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img
            src="https://elogroup.eadplataforma.com/upload/others/logo.png"
            alt=""
          />
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Admin EloGroup</strong>
            </div>
            <FaDoorOpen color onClick={handleLogOut} size={22} />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
