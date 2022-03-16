import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import TabsReducers from "../../common/Tab/tabs.reducers";
import DashboardReducer from "../../Dashboard/Dashboard.reducer";
import BillingCycleReducer from "../../billingCycle/BillingCycle.reducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
    billingCycle: BillingCycleReducer,
    dashboard: DashboardReducer,
    toastr: toastrReducer,
    form: formReducer,
    tab: TabsReducers,
})

export default rootReducer;