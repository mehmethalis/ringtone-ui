import { ActionTypes } from "../constants/actionTypes";

const userInitialState = {
  isLoading: false,
  isLogin: false,
  profile: {
    firstName: "",
    lastName: "",
    email: "",
  },
};
export default function userReducer(state = userInitialState, { type, user }) {
  switch (type) {
    case ActionTypes.USER_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case ActionTypes.USER_LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, ...user.profile },
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
        profile: { ...state.profile, ...user.profile },
        isLogin: true,
      };
    default:
      return state;
  }
}
