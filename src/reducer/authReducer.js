import { updateObj } from "../helper/utility";
const initialData = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  isAuthenticated: false,
};

const authStart = (state, action) => {
  return updateObj(state, { error: null, loading: true });
};

const authSuccess = (state = initialData, action) => {
  return updateObj(state, {
    token: action.token,
    userId: action.userId,
    error: null,
    loading: false,
    isAuthenticated: true,
  });
};

const authLogout = (state = initialData, action) => {
  localStorage.removeItem("token");
  return updateObj(state, { token: null, userId: null });
};

const authFail = (state, action) => {
  return updateObj(state, { error: action.error, loading: false });
};
const authReducer = (state = initialData, action) => {
  switch (action.type) {
    case "AUTH_START":
      return authStart(state, action);
    case "AUTH_SUCCESS":
      return authSuccess(state, action);

    case "AUTH_FAIL":
      return authFail(state, action);

    case "AUTH_LOGOUT":
      return authLogout(state, action);

    default:
      return state;
  }
};

export default authReducer;
