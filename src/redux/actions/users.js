import axios from 'axios';
import { createActions } from 'redux-actions';
import http from '../../services/http'

const {
  registerUserRequest,
  registerUserSuccess,
  registerUserFail,
} = createActions({
  REGISTER_USER_REQUEST: () => { },
  REGISTER_USER_SUCCESS: data => ({ data }),
  REGISTER_USER_FAIL: error => ({ error }),
});

export const register = (username, password,firstname, lastname) => async dispatch => {
  dispatch(registerUserRequest());
  try {
    const data = await http.post(`https://travel-love.herokuapp.com/users/login`, {
      username,
      password,
      firstname,
      lastname
    });
    dispatch(registerUserSuccess(data));
    console.log('register',data);
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
    const data = await axios.post(`https://travel-love.herokuapp.com/users/login`, {
      username,
      password,
    });
    console.log(data);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error));
  }
};

const { deleteUserRequest, deleteUserSuccess, deleteUserFail } = createActions({
  DELETE_USER_REQUEST: () => { },
  DELETE_USER_SUCCESS: data => data,
  DELETE_USER_FAIL: error => ({ error }),
});

export const deleteUser = (_id) => async dispatch => {
  dispatch(deleteUserRequest())
  try {
    console.log('ideleted',_id);
    const data = await http.delete(`https://travel-love.herokuapp.com/admins/${_id}`);
    dispatch(deleteUserSuccess(data));
    console.log('success')
  } catch (error) {
    dispatch(deleteUserFail(error));
  }
};

const {
  getAllUserRequest,
  getAllUserSuccess,
  getAllUserFail,
} = createActions({
    GET_ALL_USER_REQUEST: () => { },
    GET_ALL_USER_SUCCESS: data => ({ data }),
    GET_ALL_USER_FAIL: error => ({ error }),
});

export const getAllUser = () => async dispatch => {
  dispatch(getAllUserRequest());
  try {
    console.log('vo day');
    const data = await http.get(`https://travel-love.herokuapp.com/admins/getall`)
    console.log('data user',data);
    dispatch(getAllUserSuccess(data));
  } catch (error) {
    dispatch(getAllUserFail(error));
  }
};

