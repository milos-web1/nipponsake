import React from 'react';
import { Switch, Route } from 'react-router';

export default (
    <Switch>
        <Route path='/' />
        <Route path='/aboutUs' />
        <Route path='/products' />
        <Route path='/breweries' />
        <Route path='/whatIsSake' />
        <Route path='/contactUs' />
    </Switch>
);