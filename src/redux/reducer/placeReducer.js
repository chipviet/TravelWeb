import {handleActions} from 'redux-actions';

const initialState = {
    getAllPlace: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    getPlace: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    createPlace: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    deletePlace: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    },
    updatePlace: {
        requesting: false,
        result: null,
        status: null,
        error: null,
    }
}

const placeReducer = handleActions(
    {
        GET_ALL_PLACE_REQUEST: state =>({
            ...state,
            getAllPlace: {
                ...state.getAllPlace,
                requesting: true,
            },
        }),
   
        GET_ALL_PLACE_SUCCESS: (state, {payload}) => 
        ({
            ...state,
            getAllPlace: {
                ...state.getAllPlace,
                result: payload,
                requesting: false,
                status: 'success',
            },
        }),
   
        GET_ALL_PLACE_FAIL: (state, {payload}) => ({
            ...state,
            getAllPlace: {
                ...state.getAllPlace,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),
   
        GET_PLACE_REQUEST: state =>({
            ...state,
            getPlace: {
                ...state.getPlace,
                requesting: true,
            },
        }),
   
        GET_PLACE_SUCCESS: (state, {payload}) => 
        ({
            ...state,
            getPlace: {
                ...state.getPlace,
                result: payload,
                requesting: false,
                status: 'success',
            },
        }),
   
        GET_PLACE_FAIL: (state, {payload}) => ({
            ...state,
            getPlace: {
                ...state.getPlace,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),
   
        CREATE_NEW_PLACE_REQUEST: state => ({
            ...state,
            createPlace: {
                ...state.createPlace,
                requesting: true,
            },
        }),
   
        CREATE_NEW_PLACE_SUCCESS: (state, {payload}) => ({
           ...state,
           createPlace: {
                ...state.createPlace,
                result: payload,
                requesting: false,
                status: payload.data.message ==='Successfully'? 'success':'error',
           },
        }),
   
        CREATE_NEW_PLACE_FAIL: (state, {payload}) => ({
            ...state,
            createPlace: {
                ...state.createPlace,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        DELETE_PLACE_REQUEST: state => ({
            ...state,
            deletePlace: {
                ...state.deletePlace,
                requesting: true,
            },
        }),
   
        DELETE_PLACE_SUCCESS: (state, {payload}) => ({
           ...state,
           deletePlace: {
                ...state.deletePlace,
                result: payload,
                requesting: false,
                status: payload.data.message ==='Successfully'? 'success':'error',
           },
        }),
   
        DELETE_PLACE_FAIL: (state, {payload}) => ({
            ...state,
            deletePlace: {
                ...state.deletePlace,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),

        UPDATE_PLACE_REQUEST: state => ({
            ...state,
            updatePlace: {
                ...state.updatePlace,
                requesting: true,
            },
        }),
   
        UPDATE_PLACE_SUCCESS: (state, {payload}) => ({
           ...state,
           updatePlace: {
                ...state.updatePlace,
                result: payload,
                requesting: false,
                status: payload.data.message ==='Successfully'? 'success':'error',
           },
        }),
   
        UPDATE_PLACE_FAIL: (state, {payload}) => ({
            ...state,
            updatePlace: {
                ...state.updatePlace,
                requesting: false,
                status: 'error',
                error: payload.error,
            },
        }),
     },
     initialState
   );
   export default placeReducer;