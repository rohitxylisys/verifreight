import * as actionType from "../action/actionTypes";

export const authStart = () => {
  return {
    type: actionType.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionType.AUTH_SUCCESS,
    token: token,
    userId: userId,
  };
};

export const authFail = (err) => {
  return {
    type: actionType.AUTH_FAIL,
    error: err,
  };
};

export const authLogout = () => {
  return {
    type: actionType.AUTH_LOGOUT,
  };
};

export const authCheck = () => {
  return {
    type: actionType.CHECK_USER_AUTHORIZED,
  };
};

export const auth = (email, password) => {
  return {
    type: actionType.AUTH_USER,
    email: email,
    password: password,
  };
};
