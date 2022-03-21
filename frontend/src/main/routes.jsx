import React from "react";
import { Switch, Route, Redirect } from "react-router";

import AuthOrApp from "./AuthOrApp";
import Dashboard from "../Dashboard/Dashboard";
import BillingCycle from "../billingCycle/BillingCycle";

export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path={'/'} component={Dashboard} />
            <Route path={'/billingCycles'} component={BillingCycle} />
            <Redirect from={'*'} to={'/'} />
        </Switch>
    </div>
);