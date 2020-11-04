import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/loginPage';
import SellPage from './pages/SellPage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/loginPage" component={LoginPage} />
                <Route path="/sellPage" component={SellPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;