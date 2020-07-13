import {handleActions} from 'redux-actions';

const initialState = {
    requesting: false,
    result: null,
    status: null,
    error: null,
}

const placeReducer = handleActions(
    {
        GET_PLACE_REQUEST: state =>({
            ...state,
            user: {
                ...state.user,
                requesting: true,
            },
        }),
   
        GET_PLACE_SUCCESS: (state, {payload}) =>({
            ...state,
            user: {
                ...state.user,
                result: payload,
                requesting: false,
                status: 'success',
            },
        }),
   
        GET_PLACE_FAIL: (state, {payload}) => ({
            ...state,
            user: {
                ...state.user,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),
   
        CREATE_NEW_PLACE_REQUEST: state => ({
            ...state,
            user: {
                ...state.user,
                requesting: true,
            },
        }),
   
        CREATE_NEW_PLACE_SUCCESS: (state, {payload}) => ({
           ...state,
           user: {
                ...state.user,
                result: payload,
                requesting: false,
                status: payload.data.message ==='Successfully'? 'success':'error',
           },
        }),
   
        CREATE_NEW_PLACE_FAIL: (state, {payload}) => ({
            ...state,
            user: {
                ...state.user,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        DELETE_PLACE_REQUEST: state => ({
            ...state,
            user: {
                ...state.user,
                requesting: true,
            },
        }),
   
        DELETE_PLACE_SUCCESS: (state, {payload}) => ({
           ...state,
           user: {
                ...state.user,
                result: payload,
                requesting: false,
                status: payload.data.message ==='Successfully'? 'success':'error',
           },
        }),
   
        DELETE_PLACE_FAIL: (state, {payload}) => ({
            ...state,
            user: {
                ...state.user,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        UPDATE_PLACE_REQUEST: state => ({
            ...state,
            user: {
                ...state.user,
                requesting: true,
            },
        }),
   
        UPDATE_PLACE_SUCCESS: (state, {payload}) => ({
           ...state,
           user: {
                ...state.user,
                result: payload,
                requesting: false,
                status: payload.data.message ==='Successfully'? 'success':'error',
           },
        }),
   
        UPDATE_PLACE_FAIL: (state, {payload}) => ({
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
   export default placeReducer;