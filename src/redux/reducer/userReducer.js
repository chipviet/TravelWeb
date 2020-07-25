import { handleActions } from 'redux-actions';

const initialState = {
    login: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },

    register: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },

    getAllUser: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },

    getUser: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },

    deleteUser: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    }
}

const userReducer = handleActions(
    {
        REGISTER_USER_REQUEST: state => ({
            ...state,
            register: {
                ...state.register,
                requesting: true,
            },
        }),

        REGISTER_USER_SUCCESS: (state, { payload }) => ({
            ...state,
            register: {
                ...state.register,
                result: payload,
                requesting: false,
                status: 'success',
            },
        }),

        REGISTER_USER_FAIL: (state, { payload }) => ({
            ...state,
            register: {
                ...state.register,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        LOGIN_REQUEST: state => ({
            ...state,
            login: {
                ...state.login,
                requesting: true,
            },
        }),
        LOGIN_SUCCESS: (state, { payload }) => ({
            ...state,
            login: {
                ...state.login,
                result: payload,
                requesting: false,
                status: true,
            },
        }),

        LOGIN_FAIL: (state, { payload }) => ({
            ...state,
            login: {
                ...state.login,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),
        LOG_OUT: (state) => ({
            ...state,
            login: {
                requesting: false,
                result: null,
                status: null,
                error: null,
            }
        }),

        GET_ALL_USER_REQUEST: state =>({
            ...state,
            getAllUser: {
                ...state.getAllUser,
                requesting: true,
            },
        }),
   
        GET_ALL_USER_SUCCESS: (state, {payload}) => 
        ({
            ...state,
            getAllUser: {
                ...state.getAllUser,
                result: payload,
                requesting: false,
                status: 'success',
            },
        }),
   
        GET_ALL_USER_FAIL: (state, {payload}) => ({
            ...state,
            getAllUser: {
                ...state.getAllUser,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        DELETE_USER_REQUEST: state =>({
            ...state,
            deleteUser: {
                ...state.deleteUser,
                requesting: true,
            },
        }),
   
        DELETE_USER_SUCCESS: (state, {payload}) => 
        ({
            ...state,
            deleteUser: {
                ...state.deleteUser,
                result: payload,
                requesting: false,
                status: 'success',
            },
        }),
   
        DELETE_USER_FAIL: (state, {payload}) => ({
            ...state,
            deleteUser: {
                ...state.deleteUser,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),
   
    },
    initialState
);
export default userReducer;