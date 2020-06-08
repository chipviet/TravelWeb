import axios from 'axios';
import {createActions} from 'redux-actions';
import {connect} from 'mongoose';

var user = 0;
const {
  registerUserRequest,
  registerUserSuccess,
  registerUserFail,
} = createActions({
  REGISTER_USER_REQUEST: () => {},
  REGISTER_USER_SUCCESS: data => ({data}),
  REGISTER_USER_FAIL: error => ({error}),
});

export const register = (username, email, password) => async dispatch => {
  dispatch(registerUserRequest());
  try {
    const data = await axios.post(`http://192.168.1.3:3500/user/signup`, {
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

const {loginRequest, loginSuccess, loginFail} = createActions({
  LOGIN_REQUEST: () => {},
  LOGIN_SUCCESS: data => data,
  LOGIN_FAIL: error => ({error}),
});

export const login = (username, password) => async dispatch => {
  dispatch(loginRequest());
  try {
    const data = await axios.post(`http://192.168.1.3:3500/user/login`, {
      username,
      password,
    });
    dispatch(loginSuccess(data));
    alert(data.data.message);
  } catch (error) {
    dispatch(loginFail(error));
  }
};

