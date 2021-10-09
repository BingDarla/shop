import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../homeComponent/homeComponent';
import SuccessPage from '../successPageComponent/successPageComponent';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/success" component={SuccessPage} />
        </Switch>
    );
};
export default Routes;
