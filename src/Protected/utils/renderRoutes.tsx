import * as React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import ErrorBoundary from '../../modules/Error';

import NotFound from '../../modules/NotFound';

import Home from 'modules/Home';
import { Question } from 'modules/Questions/Component';
import { Final } from 'modules/Final';
import { FullStory } from 'modules/FullStory';

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
        <Route path="/final" children={() => (
            <ErrorBoundary>
                <Final/>
            </ErrorBoundary>
        )}/>
        <Route path="/fullstory" children={() => (
            <ErrorBoundary>
                <FullStory/>
            </ErrorBoundary>
        )}/>
        <Redirect from="/" to="/home"/>
        <Route render={() => <NotFound />} />
    </Switch>
));