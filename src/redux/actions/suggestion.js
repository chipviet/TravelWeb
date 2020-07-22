import axios from 'axios';
import { createActions } from 'redux-actions';
import http from '../../services/http'

const {
  getHotelSuggestionRequest,
  getHotelSuggestionSuccess,
  getHotelSuggestionFail,
} = createActions({
    GET_HOTEL_SUGGESTION_REQUEST: () => { },
    GET_HOTEL_SUGGESTION_SUCCESS: data => ({ data }),
    GET_HOTEL_SUGGESTION_FAIL: error => ({ error }),
});
  
export const getHotelSuggestion = (_id) => async dispatch => {
    dispatch(getHotelSuggestionRequest());
    try {
      const data = await http.get(`https://travel-love.herokuapp.com/hotels/${_id}`)
      dispatch(getHotelSuggestionSuccess(data.data));
    } catch (error) {
      dispatch(getHotelSuggestionFail(error));
    }
};

const {
    getFoodSuggestionRequest,
    getFoodSuggestionSuccess,
    getFoodSuggestionFail,
  } = createActions({
      GET_FOOD_SUGGESTION_REQUEST: () => { },
      GET_FOOD_SUGGESTION_SUCCESS: data => ({ data }),
      GET_FOOD_SUGGESTION_FAIL: error => ({ error }),
  });
  
  export const getFoodSuggestion = (_id) => async dispatch => {
    dispatch(getFoodSuggestionRequest());
    try {
      const data = await http.get(`https://travel-love.herokuapp.com/foods/${_id}`)
      dispatch(getFoodSuggestionSuccess(data.data));
    } catch (error) {
      dispatch(getFoodSuggestionFail(error));
    }
  };

