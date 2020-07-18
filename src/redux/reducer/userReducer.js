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
        })

    },
    initialState
);
export default userReducer;