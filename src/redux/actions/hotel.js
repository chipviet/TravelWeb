import axios from 'axios';
import { createActions } from 'redux-actions';

const {
  getAllHotelRequest,
  getAllHotelSuccess,
  getAllHotelFail,
} = createActions({
  GET_ALL_HOTEL_REQUEST: () => { },
  GET_ALL_HOTEL_SUCCESS: data => ({ data }),
  GET_ALL_HOTEL_FAIL: error => ({ error }),
});

export const getAllHotel = () => async dispatch => {
  dispatch(getAllHotelRequest());
  try {
    const data = await axios.get(`https://travel-love.herokuapp.com/hotels`)
    console.log("hotel:", data)
    dispatch(getAllHotelSuccess(data.data));
  } catch (error) {
    dispatch(getAllHotelFail(error));
  }
};

const { getHotelRequest, getHotelSuccess, getHotelFail } = createActions({
  GET_HOTEL_REQUEST: () => { },
  GET_HOTEL_SUCCESS: data => data,
  GET_HOTEL_FAIL: error => ({ error }),
});

export const getHotel = (_id) => async dispatch => {
  console.log("id hotel",_id);
  dispatch(getHotelRequest());
  try {
    const data = await axios.get(`https://travel-love.herokuapp.com/hotels/${_id}`)
    console.log('data hotel', data);
    dispatch(getHotelSuccess(data));
  } catch (error) {
    dispatch(getHotelFail(error));
  }
};

const { createNewHotelRequest, createNewHotelSuccess, createNewHotelFail } = createActions({
  CREATE_NEW_HOTEL_REQUEST: () => { },
  CREATE_NEW_HOTEL_SUCCESS: data => data,
  CREATE_NEW_HOTEL_FAIL: error => ({ error }),
});

export const createNewHotel = (id, Name, Star, Price, Star_Rating, Description, URL_Image) => async dispatch => {
  dispatch(createNewHotelRequest());
  try {
    const Place = await axios.get(`https://travel-love.herokuapp.com/places/${id}`)
    const PlaceID = id;
    const data = await axios.post(`https://travel-love.herokuapp.com/hotels`, {
      Name,
      PlaceID,
      Place,
      Star,
      Price,
      Star_Rating,
      Description,
      URL_Image
    });
    dispatch(createNewHotelSuccess(data));
    alert(data.data.message);
  } catch (error) {
    dispatch(createNewHotelFail(error));
  }
};

const { deleteHotelRequest, deleteHotelSuccess, deleteHotelFail } = createActions({
  DELETE_HOTEL_REQUEST: () => { },
  DELETE_HOTEL_SUCCESS: data => data,
  DELETE_HOTEL_FAIL: error => ({ error }),
});

export const deleteHotel = (_id) => async dispatch => {
  dispatch(deleteHotelRequest())
  try {
    console.log(_id);
    const data = await axios.delete(`https://travel-love.herokuapp.com/hotels/${_id}`);
    dispatch(deleteHotelSuccess(data));
  } catch (error) {
    dispatch(deleteHotelFail(error));
  }
};

const { updateHotelRequest, updateHotelSuccess, updateHotelFail } = createActions({
  UPDATE_PLACE_REQUEST: () => { },
  UPDATE_PLACE_SUCCESS: data => data,
  UPDATE_PLACE_FAIL: error => ({ error }),
});

export const updateHotel = (id, Name, Star, Price, Star_Rating, Description, URL_Image) => async dispatch => {
dispatch(updateHotelRequest());
try {
  const Place = await axios.get(`https://travel-love.herokuapp.com/places/${id}`)
  const PlaceID = id;
  const data = await axios.patch(`https://travel-love.herokuapp.com/hotels`, {
    Name,
    PlaceID,
    Place,
    Star,
    Price,
    Star_Rating,
    Description,
    URL_Image
  });
  dispatch(updateHotelSuccess(data));
} catch (error) {
  dispatch(updateHotelFail(error));
}
};