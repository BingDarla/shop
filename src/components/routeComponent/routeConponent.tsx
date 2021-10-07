import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../homeComponent/homeComponent';

const Routes:React.FC=()=>{
    return (
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    )
}
export default Routes;
