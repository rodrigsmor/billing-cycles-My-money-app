import { combineReducers } from "redux";
import DashboardReducer from "../../Dashboard/Dashboard.reducer";

const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer;