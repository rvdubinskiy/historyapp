import { default as React } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useObserver } from 'mobx-react';

import ProtectedComponent from '../../../Protected';

export default (): JSX.Element => {
    return useObserver(() => {
        return (
            <Switch>
                <Route path="/home" component={ProtectedComponent} />
                <Route path="/" component={ProtectedComponent}/>
            </Switch>
        );
    });
};