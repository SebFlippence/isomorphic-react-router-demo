'use babel';

import React from 'react';
import Router, { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import Layout from './view/layout.jsx';
import NotFound from './view/notFound.jsx'
import Home from './view/home.jsx';
import Forms from './view/forms.jsx';
import Tables from './view/tables.jsx';

// declare our routes and their hierarchy
export default (
    <Route handler={Layout}>
        <DefaultRoute handler={Home}/>
        <Route path="/forms" handler={Forms}/>
        <Route path="/tables" handler={Tables}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);
