import { combineReducers } from "redux";
import TabsReducers from "../../common/Tab/tabs.reducers";
import DashboardReducer from "../../Dashboard/Dashboard.reducer";
import BillingCycleReducer from "../../billingCycle/BillingCycle.reducer";

const rootReducer = combineReducers({
    billingCycle: BillingCycleReducer,
    dashboard: DashboardReducer,
    tab: TabsReducers,
})

export default rootReducer;