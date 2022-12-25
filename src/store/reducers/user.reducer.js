import { ActionTypes } from "../constants/actionTypes";

const userInitialState = {
  isLoading: false,
  isLogin: false,
  userRingtones: null,
  allRingtones: null,
  basket: {
    items: [],
  },
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
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        basket: { ...state.basket, items: [...state.basket.items, user.basket.item] },
      };
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        basket: {
          ...state.basket,
          items: state.basket.items.filter((item) => item.id !== user.basket.item.id),
        },
      };
    case ActionTypes.PAY_REQUEST:
      return { ...state, isLoading: true };
    case ActionTypes.PAY_REQUEST_SUCCESS:
      return {
        ...state,
        basket: {
          ...state.basket,
          items: [],
        },
        userRingtones: [...state.userRingtones, ...user.userRingtones],
        isLoading: false,
      };
    default:
      return state;
  }
}
