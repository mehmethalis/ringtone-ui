import { ActionTypes } from "../constants/actionTypes";

export const changeStatisticDate = ({ year, month }) => {
  return {
    type: ActionTypes.CHANGE_STATISTIC_DATE,
    statistic: { year, month },
  };
};

export const getTotalUser = () => {
  return {
    type: ActionTypes.TOTAL_USER_REQUEST,
  };
};

export const getTotalUserSuccess = (count) => {
  return {
    type: ActionTypes.TOTAL_USER_REQUEST_SUCCESS,
    statistic: { count },
  };
};

export const getTotalPayment = () => {
  return {
    type: ActionTypes.TOTAL_PAYMENT_REQUEST,
  };
};

export const getTotalPaymentSuccess = (count) => {
  return {
    type: ActionTypes.TOTAL_PAYMENT_REQUEST_SUCCESS,
    statistic: { count },
  };
};
