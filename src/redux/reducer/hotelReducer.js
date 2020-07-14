import { handleActions } from 'redux-actions';

const initialState = {
    getAllHotel: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    createHotel: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    deleteHotel: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    updateHotel: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    }
}

const hotelReducer = handleActions(
    {
        GET_ALL_HOTEL_REQUEST: state => ({
            ...state,
            getAllHotel: {
                ...state.getAllHotel,
                requesting: true,
            },
        }),

        GET_ALL_HOTEL_SUCCESS: (state, { payload }) =>
            ({
                ...state,
                getAllHotel: {
                    ...state.getAllHotel,
                    result: payload,
                    requesting: false,
                    status: 'success',
                },
            }),

        GET_ALL_HOTEL_FAIL: (state, { payload }) => ({
            ...state,
            getAllHotel: {
                ...state.getAllHotel,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        CREATE_NEW_HOTEL_REQUEST: state => ({
            ...state,
            createHotel: {
                ...state.createHotel,
                requesting: true,
            },
        }),

        CREATE_NEW_HOTEL_SUCCESS: (state, { payload }) => ({
            ...state,
            createHotel: {
                ...state.createHotel,
                result: payload,
                requesting: false,
                status: payload.data.message === 'Successfully' ? 'success' : 'error',
            },
        }),

        CREATE_NEW_HOTEL_FAIL: (state, { payload }) => ({
            ...state,
            createHotel: {
                ...state.createHotel,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        DELETE_HOTEL_REQUEST: state => ({
            ...state,
            deleteHotel: {
                ...state.deleteHotel,
                requesting: true,
            },
        }),

        DELETE_HOTEL_SUCCESS: (state, { payload }) => ({
            ...state,
            deleteHotel: {
                ...state.deleteHotel,
                result: payload,
                requesting: false,
                status: payload.data.message === 'Successfully' ? 'success' : 'error',
            },
        }),

        DELETE_HOTEL_FAIL: (state, { payload }) => ({
            ...state,
            deleteHotel: {
                ...state.deleteHotel,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        UPDATE_HOTEL_REQUEST: state => ({
            ...state,
            updateHotel: {
                ...state.updateHotel,
                requesting: true,
            },
        }),

        UPDATE_HOTEL_SUCCESS: (state, { payload }) => ({
            ...state,
            updateHotel: {
                ...state.updateHotel,
                result: payload,
                requesting: false,
                status: payload.data.message === 'Successfully' ? 'success' : 'error',
            },
        }),

        UPDATE_HOTEL_FAIL: (state, { payload }) => ({
            ...state,
            updateHotel: {
                ...state.updateHotel,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),
    },
    initialState
);
export default hotelReducer;