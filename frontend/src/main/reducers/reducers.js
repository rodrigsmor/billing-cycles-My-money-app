import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import TabsReducers from "../../common/Tab/tabs.reducers";
import DashboardReducer from "../../Dashboard/Dashboard.reducer";
import BillingCycleReducer from "../../billingCycle/BillingCycle.reducer";

const rootReducer = combineReducers({
    billingCycle: BillingCycleReducer,
    dashboard: DashboardReducer,
    form: formReducer,
    tab: TabsReducers,
})

export default rootReducer;