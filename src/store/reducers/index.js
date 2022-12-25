import { combineReducers } from "redux";
import playerReducer from "./player.reducer";
import userReducer from "./user.reducer";

const reducers = combineReducers({ userState: userReducer, playerState: playerReducer });
export default reducers;
