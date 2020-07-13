import {handleActions} from 'redux-actions';

const initialState = {
    requesting: false,
    result: null,
    status: null,
    error: null,
}

const userReducer = handleActions(
    {
        REGISTER_USER_REQUEST: state =>({
            ...state,
            user: {
                ...state.user,
                requesting: true,
            },
        }),
   
       REGISTER_USER_SUCCESS: (state, {payload}) =>({
            ...state,
            user: {
                ...state.user,
                result: payload,
                requesting: false,
                status: 'success',
            },
        }),
   
       REGISTER_USER_FAIL: (state, {payload}) => ({
            ...state,
            user: {
                ...state.user,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),
   
       LOGIN_REQUEST: state => ({
            ...state,
            user: {
                ...state.user,
                requesting: true,
            },
        }),
   
       LOGIN_SUCCESS: (state, {payload}) => ({
           ...state,
           user: {
                ...state.user,
                result: payload,
                requesting: false,
                status: payload.data.message ==='Successfully'? 'success':'error',
           },
        }),
   
       LOGIN_FAIL: (state, {payload}) => ({
            ...state,
            user: {
                ...state.user,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),
       
     },
     initialState
   );
   export default userReducer;