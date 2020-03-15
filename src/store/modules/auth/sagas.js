import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';
import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'login', { email, password });

    const { token, admin } = response.data;
    api.defaults.headers.authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, admin));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro no login. Confira se preencheu os dados corretamente.');
    yield put(signInFailure());
  }
}

export function signOut() {
  history.push('/login');
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('persist/REHYDRATE', setToken),
]);
