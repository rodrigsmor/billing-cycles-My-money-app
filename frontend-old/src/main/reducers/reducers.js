import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import TabsReducers from "../../common/Tab/tabs.reducers";
import DashboardReducer from "../../Dashboard/Dashboard.reducer";
import BillingCycleReducer from "../../billingCycle/BillingCycle.reducer";
import { reducer as toastrReducer } from "react-redux-toastr";
import authReducer from "../../auth/auth.reducer";

const rootReducer = combineReducers({
    billingCycle: BillingCycleReducer,
    dashboard: DashboardReducer,
    toastr: toastrReducer,
    form: formReducer,
    auth: authReducer,
    tab: TabsReducers,
})

export default rootReducer;