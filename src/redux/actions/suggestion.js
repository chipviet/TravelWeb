import axios from 'axios';
import { createActions } from 'redux-actions';

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
    const data = await axios.get(`https://travel-love.herokuapp.com/hotels/${_id}`)
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
    const data = await axios.get(`https://travel-love.herokuapp.com/foods/${_id}`)
    dispatch(getFoodSuggestionSuccess(data.data));
  } catch (error) {
    dispatch(getFoodSuggestionFail(error));
  }
};
const {
  getAttractionSuggestionRequest,
  getAttractionSuggestionSuccess,
  getAttractionSuggestionFail,
} = createActions({
  GET_ATTRACTION_SUGGESTION_REQUEST: () => { },
  GET_ATTRACTION_SUGGESTION_SUCCESS: data => ({ data }),
  GET_ATTRACTION_SUGGESTION_FAIL: error => ({ error }),
});

export const getAttractionSuggestion = (_id) => async dispatch => {
  dispatch(getAttractionSuggestionRequest());
  try {
    const data = await axios.get(`https://travel-love.herokuapp.com/hotplace/${_id}`)
    dispatch(getAttractionSuggestionSuccess(data.data));
  } catch (error) {
    dispatch(getAttractionSuggestionFail(error));
  }
};

