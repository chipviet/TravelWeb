import { handleActions } from 'redux-actions';

const initialState = {

    getFoodSuggestion:{
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    getHotelSuggestion: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },

}

const SuggestionReducer = handleActions(
    {
        GET_FOOD_SUGGESTION_REQUEST: state => ({
            ...state,
            getFoodSuggestion: {
                ...state.getFoodSuggestion,
                requesting: true,
            },
        }),

        GET_FOOD_SUGGESTION_SUCCESS: (state, { payload }) =>
            ({
                ...state,
                getFoodSuggestion: {
                    ...state.getFoodSuggestion,
                    result: payload,
                    requesting: false,
                    status: 'success',
                },
            }),

        GET_FOOD_SUGGESTION_FAIL: (state, { payload }) => ({
            ...state,
            getFoodSuggestion: {
                ...state.getFoodSuggestion,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        GET_HOTEL_SUGGESTION_REQUEST: state => ({
            ...state,
            getHotelSuggestion: {
                ...state.getHotelSuggestion,
                requesting: true,
            },
        }),

        GET_HOTEL_SUGGESTION_SUCCESS: (state, { payload }) =>
            ({
                ...state,
                getHotelSuggestion: {
                    ...state.getHotelSuggestion,
                    result: payload,
                    requesting: false,
                    status: 'success',
                },
            }),

        GET_HOTEL_SUGGESTION_FAIL: (state, { payload }) => ({
            ...state,
            getHotelSuggestion: {
                ...state.getHotelSuggestion,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

    },
    initialState
);
export default SuggestionReducer;