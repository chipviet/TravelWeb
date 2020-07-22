import axios from 'axios';
import { createActions } from 'redux-actions';

const {
  registerUserRequest,
  registerUserSuccess,
  registerUserFail,
} = createActions({
  REGISTER_USER_REQUEST: () => { },
  REGISTER_USER_SUCCESS: data => ({ data }),
  REGISTER_USER_FAIL: error => ({ error }),
});

export const register = (username, email, password) => async dispatch => {
  dispatch(registerUserRequest());
  try {
    const data = await axios.post(`https://travel-love.herokuapp.com/admins/login`, {
      username,
      email,
      password,
    });
    dispatch(registerUserSuccess(data));
    alert(data.data.message);
  } catch (error) {
    dispatch(registerUserFail(error));
  }
};

const { loginRequest, loginSuccess, loginFail } = createActions({
  LOGIN_REQUEST: () => { },
  LOGIN_SUCCESS: data => data,
  LOGIN_FAIL: error => ({ error }),
});

export const login = (username, password) => async dispatch => {
  dispatch(loginRequest());
  try {
    const data = await axios.post(`https://travel-love.herokuapp.com/admins/login`, {
      username,
      password,
    });
    console.log(data);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error));
  }
};

const {logoutRequest} = createActions({
  LOG_OUT: () => { }
})
export const logout = () => async dispatch => {
  clearAuthToken();
  dispatch(logoutRequest());
}

export const clearAuthToken = () => {
  if (localStorage.getItem("AUTH_TOKEN_KEY")) {
    localStorage.removeItem("AUTH_TOKEN_KEY");
  }
};



