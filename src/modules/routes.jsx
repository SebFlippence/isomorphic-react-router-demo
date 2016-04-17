'use strict';

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Layout from './view/Layout.jsx';
import Home from './view/Home.jsx';
import Forms from './view/Forms.jsx';
import Tables from './view/Tables.jsx';

// declare our routes and their hierarchy
export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="/forms" component={Forms}/>
    <Route path="/tables" component={Tables}/>
  </Route>
);
