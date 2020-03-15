import React from 'react';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import history from './services/history';

import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';

import Form from './pages/Form';
import AfterForm from './pages/AfterForm';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/after" component={AfterForm} />

        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}
