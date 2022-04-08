import * as actionType from "../action/actionTypes";
import axios from "axios";
// import { toast } from "react-toastify";

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
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(authLogout());
    }else{
      dispatch(authSuccess());
    }
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    const authData = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:4000/user/logIn", authData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        // toast.success(response.data.status);
        dispatch(authSuccess(response.data.token, response.data.user.id));
      })
      .catch((err) => {
        alert(err.response.data.error);
        // toast.error(
        //   err.response.data ? err.response.data.error : "Something went wrong.!"
        // );
        dispatch(authFail(err));
      });
    dispatch(authStart());
  };
};
