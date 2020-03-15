import React from 'react';
import { Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import * as Yup from 'yup';

import { signInRequest } from '../../../store/modules/auth/actions';

import { Form, SubmitButton } from '../../Form/styles';
import Input from '../../../components/Input';
import { Container, Content } from './styles';

export default function Login() {
  const dispatch = useDispatch();
  const { signed, token, loading } = useSelector(state => state.auth);

  if (signed || token !== null) {
    return <Redirect to="/dashboard" />;
  }

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email()
          .required(),
        password: Yup.string()
          .min(6)
          .required(),
      });

      await schema.validate(data, { abortEarly: false });
      const { email, password } = data;

      dispatch(signInRequest(email, password));
    } catch (error) {
      toast.error('Preencha todos os campos.');
    }
  }

  return (
    <Container>
      <Content>
        <img
          src="https://elogroup.eadplataforma.com/upload/others/logo.png"
          alt="Logo EloGroup"
        />
        <Form onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Informe seu email" />
          <Input
            name="password"
            type="password"
            placeholder="Informe sua senha"
          />
          <SubmitButton disabled={loading}>Entrar</SubmitButton>
        </Form>
      </Content>
    </Container>
  );
}
