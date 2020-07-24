import { createActions } from 'redux-actions';
import http from '../../services/http'

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
    const data = await http.get(`https://travel-love.herokuapp.com/hotels`)
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
    const data = await http.get(`https://travel-love.herokuapp.com/hotels/id/${_id}`)
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
  console.log("Voday");
  dispatch(createNewHotelRequest());
  try {
    console.log("Voday1");
    const Place = await http.get(`https://travel-love.herokuapp.com/places/${id}`)
    console.log("Voday2");
    const PlaceID = id;
    console.log("Voday3");
    const data = await http.post(`https://travel-love.herokuapp.com/hotels`, {
      Name,
      PlaceID,
      Place,
      Star,
      Price,
      Star_Rating,
      Description,
      URL_Image
    });
    console.log('data',data)
    dispatch(createNewHotelSuccess(data));
    alert(data.data.message);
  } catch (error) {
    console.log("error")
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
    console.log('ideleted',_id);
    const data = await http.delete(`https://travel-love.herokuapp.com/hotels/${_id}`);
    dispatch(deleteHotelSuccess(data));
    console.log('success')
  } catch (error) {
    dispatch(deleteHotelFail(error));
  }
};

const { updateHotelRequest, updateHotelSuccess, updateHotelFail } = createActions({
  UPDATE_HOTEL_REQUEST: () => { },
  UPDATE_HOTEL_SUCCESS: data => data,
  UPDATE_HOTEL_FAIL: error => ({ error }),
});

export const updateHotel = (id,Name,placeId, Star, Price, Star_Rating, Description, URL_Image) => async dispatch => {
dispatch(updateHotelRequest());
try {
  console.log("id hotel",id)
  console.log('pacleid',placeId)
  const Place = await http.get(`https://travel-love.herokuapp.com/places/${placeId}`)
  console.log('Place Object',Place);
  const PlaceID = placeId;
  const data = await http.patch(`https://travel-love.herokuapp.com/hotels/${id}`, {
    Name,
    PlaceID,
    Place,
    Star,
    Price,
    Star_Rating,
    Description,
    URL_Image
  });
  console.log('Dataaa', data)
  dispatch(updateHotelSuccess(data));
  console.log('success');
} catch (error) {
  dispatch(updateHotelFail(error));
}
};