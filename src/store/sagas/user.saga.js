import { call, put, takeLatest } from "@redux-saga/core/effects";
import { ActionTypes } from "../constants/actionTypes";
import { toast } from "react-toastify";
import { getProfile, login } from "../../services/user.service";
import {
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
    yield put(userVerifyTokenSuccess(user));
  } catch (err) {
    toast.error(err.response.data.message);
    yield put(userLoginRequestError());
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
}
