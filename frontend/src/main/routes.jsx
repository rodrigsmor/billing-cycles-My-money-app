import React from "react";
import { Router, Route, Redirect, hashHistory, IndexRoute } from "react-router";

import AuthOrApp from "./AuthOrApp";
import Dashboard from "../Dashboard/Dashboard";
import BillingCycle from "../billingCycle/BillingCycle";

export default props => (
    <Router history={hashHistory}>
        <Route path={'/'} component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path={'billingCycles'} component={BillingCycle} />
        </Route>
        <Redirect from={'*'} to={'/'} />
    </Router>
);