import { call, put, takeLatest } from "@redux-saga/core/effects";
import { ActionTypes } from "../constants/actionTypes";
import { toast } from "react-toastify";
import {
  getAllRingtones,
  getProfile,
  getUserRingtones,
  login,
  pay,
} from "../../services/user.service";
import {
  paySuccess,
  userLoginRequestError,
  userLoginRequestSuccess,
  userLogoutRequestSuccess,
  userVerifyTokenSuccess,
} from "../actions/user.actions";

const setLocalStorage = async (key, value) => await window.localStorage.setItem(key, value);
const removeLocalStorage = async (key) => await window.localStorage.removeItem(key);

function* loginRequest({ credentials }) {
  try {
    const session = yield call(login, credentials);

    yield call(setLocalStorage, "session", JSON.stringify(session));

    const user = yield call(getProfile);
    const userRingtones = yield call(getUserRingtones);
    const allRingtones = yield call(getAllRingtones);

    user.userRingtones = userRingtones;
    user.allRingtones = allRingtones;
    yield put(userLoginRequestSuccess(user));
    toast.success("Başarıyla giriş yapıldı!");
  } catch (err) {
    toast.error(err.response.data.message);
    yield put(userLoginRequestError());
  }
}

function* verifyUser() {
  try {
    const user = yield call(getProfile);
    const userRingtones = yield call(getUserRingtones);
    const allRingtones = yield call(getAllRingtones);

    user.userRingtones = userRingtones;
    user.allRingtones = allRingtones;
    yield put(userVerifyTokenSuccess(user));
  } catch (err) {
    toast.error(err.response.data.message);
    yield put(userLoginRequestError());
  }
}

function* makePayment({ ringtonesIds }) {
  try {
    const userRingtones = yield call(pay, ringtonesIds);

    yield put(paySuccess(userRingtones));
  } catch (err) {
    toast.error(err.response.data.message);
  }
}

function* logoutRequest() {
  try {
    yield call(removeLocalStorage, "session");
    yield put(userLogoutRequestSuccess());
  } catch (err) {
    toast.error("Bir hata oluştu");
  }
}

export default function* userSaga() {
  yield takeLatest(ActionTypes.USER_LOGIN_REQUEST, loginRequest);
  yield takeLatest(ActionTypes.USER_LOGOUT_REQUEST, logoutRequest);
  yield takeLatest(ActionTypes.USER_VERIFY_TOKEN, verifyUser);
  yield takeLatest(ActionTypes.PAY_REQUEST, makePayment);
}
