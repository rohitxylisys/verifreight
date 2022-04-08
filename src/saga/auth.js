import { put } from "redux-saga/effects";
import * as actions from "../action/index";
import axios from "axios";

export function* authUserSaga(action) {
  yield put(actions.authStart());
  try {
    const authData = {
      email: action.email,
      password: action.password,
    };
    const response = yield axios.post(
      "http://localhost:4000/user/logIn",
      authData
    );
    yield localStorage.setItem("token", response.data.token);
    yield put(actions.authSuccess(response.data.token, response.data.user.id));
  } catch (error) {
    yield put(actions.authFail(err));
  }
}

export function* authCheckSaga() {
  const token = localStorage.getItem("token");
  if (!token) {
    yield put(actions.authLogout());
  } else {
    yield put(actions.authSuccess());
  }
}
