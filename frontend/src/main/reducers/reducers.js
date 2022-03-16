import { combineReducers } from "redux";
import tabsReducers from "../../common/Tab/tabs.reducers";
import DashboardReducer from "../../Dashboard/Dashboard.reducer";

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: tabsReducers
})

export default rootReducer;