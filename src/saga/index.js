import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../action/actionTypes";
import { authUserSaga, authCheckSaga } from "./auth";

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.CHECK_USER_AUTHORIZED, authCheckSaga),
  ]);
}
