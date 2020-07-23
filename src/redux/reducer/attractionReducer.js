import { handleActions } from 'redux-actions';

const initialState = {
    getAllAttraction: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    getAttraction: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    createAttraction: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    deleteAttraction: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    updateAttraction: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    }
}

const attractionReducer = handleActions(
    {
        GET_ALL_ATTRACTION_REQUEST: state => ({
            ...state,
            getAllAttraction: {
                ...state.getAllAttraction,
                requesting: true,
            },
        }),

        GET_ALL_ATTRACTION_SUCCESS: (state, { payload }) =>
            ({
                ...state,
                getAllAttraction: {
                    ...state.getAllAttraction,
                    result: payload,
                    requesting: false,
                    status: 'success',
                },
            }),

        GET_ALL_ATTRACTION_FAIL: (state, { payload }) => ({
            ...state,
            getAllAttraction: {
                ...state.getAllAttraction,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        GET_ATTRACTION_REQUEST: state => ({
            ...state,
            getAttraction: {
                ...state.getAttraction,
                requesting: true,
            },
        }),

        GET_ATTRACTION_SUCCESS: (state, { payload }) =>
            ({
                ...state,
                getAttraction: {
                    ...state.getAttraction,
                    result: payload,
                    requesting: false,
                    status: 'success',
                },
            }),

        GET_ATTRACTION_FAIL: (state, { payload }) => ({
            ...state,
            getAttraction: {
                ...state.getAttraction,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        CREATE_NEW_ATTRACTION_REQUEST: state => ({
            ...state,
            createAttraction: {
                ...state.createAttraction,
                requesting: true,
            },
        }),

        CREATE_NEW_ATTRACTION_SUCCESS: (state, { payload }) => ({
            ...state,
            createAttraction: {
                ...state.createAttraction,
                result: payload,
                requesting: false,
                status: payload.data.message === 'Successfully' ? 'success' : 'error',
            },
        }),

        CREATE_NEW_ATTRACTION_FAIL: (state, { payload }) => ({
            ...state,
            createAttraction: {
                ...state.createAttraction,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        DELETE_ATTRACTION_REQUEST: state => ({
            ...state,
            deleteAttraction: {
                ...state.deleteAttraction,
                requesting: true,
            },
        }),

        DELETE_ATTRACTION_SUCCESS: (state, { payload }) => ({
            ...state,
            deleteAttraction: {
                ...state.deleteAttraction,
                result: payload,
                requesting: false,
                status: payload.data.message === 'Successfully' ? 'success' : 'error',
            },
        }),

        DELETE_ATTRACTION_FAIL: (state, { payload }) => ({
            ...state,
            deleteAttraction: {
                ...state.deleteAttraction,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        UPDATE_ATTRACTION_REQUEST: state => ({
            ...state,
            updateAttraction: {
                ...state.updateAttraction,
                requesting: true,
            },
        }),

        UPDATE_ATTRACTION_SUCCESS: (state, { payload }) => ({
            ...state,
            updateAttraction: {
                ...state.updateAttraction,
                result: payload,
                requesting: false,
                status: payload.data.message === 'Successfully' ? 'success' : 'error',
            },
        }),

        UPDATE_ATTRACTION_FAIL: (state, { payload }) => ({
            ...state,
            updateAttraction: {
                ...state.updateAttraction,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),
    },
    initialState
);
export default attractionReducer;