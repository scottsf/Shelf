import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.js';
import Form from './components/form/Form.js';

const Router = () => (
  <Switch>
    <Route path='/' component={Dashboard} exact />
    <Route path='/add' component={Form} />
    <Route path='/edit/:id' component={Form} />
  </Switch>
);

export default Router;
