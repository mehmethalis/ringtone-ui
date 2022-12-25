import { ActionTypes } from "../constants/actionTypes";

export const userLoginRequest = ({ email, password }) => {
  return {
    type: ActionTypes.USER_LOGIN_REQUEST,
    credentials: { email, password },
  };
};

export const userLoginRequestError = () => {
  return {
    type: ActionTypes.USER_LOGIN_REQUEST_ERROR,
  };
};

export const userLoginRequestSuccess = (profile) => {
  return {
    type: ActionTypes.USER_LOGIN_REQUEST_SUCCESS,
    user: profile,
  };
};
export const userLogoutRequest = () => {
  return {
    type: ActionTypes.USER_LOGOUT_REQUEST,
  };
};

export const userLogoutRequestSuccess = () => {
  return {
    type: ActionTypes.USER_LOGOUT_REQUEST_SUCCESS,
  };
};

export const userVerifyToken = () => {
  return {
    type: ActionTypes.USER_VERIFY_TOKEN,
  };
};

export const userVerifyTokenSuccess = (profile) => {
  return {
    type: ActionTypes.USER_VERIFY_TOKEN_SUCCESS,
    user: profile,
  };
};

export const pay = (ringtonesIds) => {
  return {
    type: ActionTypes.PAY_REQUEST,
    ringtonesIds,
  };
};

export const paySuccess = (ringtones) => {
  return {
    type: ActionTypes.PAY_REQUEST_SUCCESS,
    user: { userRingtones: ringtones },
  };
};

export const addItem = (item) => {
  return {
    type: ActionTypes.ADD_ITEM,
    user: { basket: { item } },
  };
};

export const removeItem = (item) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    user: { basket: { item } },
  };
};
