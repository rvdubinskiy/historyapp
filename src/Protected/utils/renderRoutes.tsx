import * as React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import ErrorBoundary from '../../modules/Error';

import NotFound from '../../modules/NotFound';

import Home from 'modules/Home';
import { Question } from 'modules/Questions/Component';
import { useObserver } from 'mobx-react';


export const renderRoutes = () => useObserver(() => (

    <Switch>
        <Route path="/home" component={() => (
            <ErrorBoundary>
                <Home/>
            </ErrorBoundary>
        )}/>
        <Route path="/question/:id" children={() => (
            <ErrorBoundary>
                <Question/>
            </ErrorBoundary>
        )}/>
        <Redirect from="/" to="/home"/>
        <Route render={() => <NotFound />} />
    </Switch>
));