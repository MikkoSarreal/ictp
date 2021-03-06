import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import FormPage from './containers/FormPage';
import FormCreatePage from './containers/FormCreatePage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.FORMCREATE} component={FormCreatePage} />
      <Route path={routes.FORM} component={FormPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
