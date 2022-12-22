import { combineReducers } from "redux";
import userReducer from "./user.reducer";

const reducers = combineReducers({ userState: userReducer });
export default reducers;
