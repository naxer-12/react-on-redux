import {combineReducers} from "redux";

import accountReducer from "./account-reducers";


const reducers = combineReducers({
    account : accountReducer
});

export default reducers;