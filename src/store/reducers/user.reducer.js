import { ActionTypes } from "../constants/actionTypes";

const userInitialState = {
  isLoading: false,
  isLogin: false,
  userRingtones: null,
  allRingtones: null,
};
export default function userReducer(state = userInitialState, { type, user }) {
  switch (type) {
    case ActionTypes.USER_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case ActionTypes.USER_LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        ...user,
        isLoading: false,
        isLogin: true,
      };
    case ActionTypes.USER_LOGIN_REQUEST_ERROR:
      return userInitialState;
    case ActionTypes.USER_LOGOUT_REQUEST_SUCCESS:
      return userInitialState;
    case ActionTypes.USER_VERIFY_TOKEN_SUCCESS:
      return {
        ...state,
        ...user,
        allRingtones: user.allRingtones,
        isLogin: true,
      };
    case ActionTypes.PAY_REQUEST:
      return { ...state, isLoading: true };
    case ActionTypes.PAY_REQUEST_SUCCESS:
      return {
        ...state,
        userRingtones: [...state.userRingtones, ...user.userRingtones],
        isLoading: false,
      };
    default:
      return state;
  }
}
