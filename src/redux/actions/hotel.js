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
    const data = await axios.get(`http://localhost:3500/hotels`)
    console.log("hotel:",data)
    dispatch(getAllHotelSuccess(data.data));
  } catch (error) {
    dispatch(getAllHotelFail(error));
  }
};

const { createNewHotelRequest, createNewHotelSuccess, createNewHotelFail } = createActions({
    CREATE_NEW_HOTEL_REQUEST: () => { },
    CREATE_NEW_HOTEL_SUCCESS: data => data,
    CREATE_NEW_HOTEL_FAIL: error => ({ error }),
});

export const createNewHotel = (Name,id,Star,Price,Star_Rating,Description, URL_Image) => async dispatch => {
  dispatch(createNewHotelRequest());
  try {
    const PlaceID = await axios.get(`http://localhost:3500/places/${id}`)
    const data = await axios.post(`http://localhost:3500/hotels`, {
      Name, 
      PlaceID,
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



