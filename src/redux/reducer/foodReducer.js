import { handleActions } from 'redux-actions';

const initialState = {
    getAllFood: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    getFood: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    createFood: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    deleteFood: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    updateFood: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    }
}

const FoodReducer = handleActions(
    {
        GET_ALL_FOOD_REQUEST: state => ({
            ...state,
            getAllFood: {
                ...state.getAllFood,
                requesting: true,
            },
        }),

        GET_ALL_FOOD_SUCCESS: (state, { payload }) =>
            ({
                ...state,
                getAllFood: {
                    ...state.getAllFood,
                    result: payload,
                    requesting: false,
                    status: 'success',
                },
            }),

        GET_ALL_FOOD_FAIL: (state, { payload }) => ({
            ...state,
            getAllFood: {
                ...state.getAllFood,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        GET_FOOD_REQUEST: state => ({
            ...state,
            getFood: {
                ...state.getFood,
                requesting: true,
            },
        }),

        GET_FOOD_SUCCESS: (state, { payload }) =>
            ({
                ...state,
                getFood: {
                    ...state.getFood,
                    result: payload,
                    requesting: false,
                    status: 'success',
                },
            }),

        GET_FOOD_FAIL: (state, { payload }) => ({
            ...state,
            getFood: {
                ...state.getFood,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        CREATE_NEW_FOOD_REQUEST: state => ({
            ...state,
            createFood: {
                ...state.createFood,
                requesting: true,
            },
        }),

        CREATE_NEW_FOOD_SUCCESS: (state, { payload }) => ({
            ...state,
            createFood: {
                ...state.createFood,
                result: payload,
                requesting: false,
                status: payload.data.message === 'Successfully' ? 'success' : 'error',
            },
        }),

        CREATE_NEW_FOOD_FAIL: (state, { payload }) => ({
            ...state,
            createFood: {
                ...state.createFood,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        DELETE_FOOD_REQUEST: state => ({
            ...state,
            deleteFood: {
                ...state.deleteFood,
                requesting: true,
            },
        }),

        DELETE_FOOD_SUCCESS: (state, { payload }) => ({
            ...state,
            deleteFood: {
                ...state.deleteFood,
                result: payload,
                requesting: false,
                status: payload.data.message === 'Successfully' ? 'success' : 'error',
            },
        }),

        DELETE_FOOD_FAIL: (state, { payload }) => ({
            ...state,
            deleteFood: {
                ...state.deleteFood,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        UPDATE_FOOD_REQUEST: state => ({
            ...state,
            updateFood: {
                ...state.updateFood,
                requesting: true,
            },
        }),

        UPDATE_FOOD_SUCCESS: (state, { payload }) => ({
            ...state,
            updateFood: {
                ...state.updateFood,
                result: payload,
                requesting: false,
                status: payload.data.message === 'Successfully' ? 'success' : 'error',
            },
        }),

        UPDATE_FOOD_FAIL: (state, { payload }) => ({
            ...state,
            updateFood: {
                ...state.updateFood,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),
    },
    initialState
);
export default FoodReducer;