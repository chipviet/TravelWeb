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
    dispatch(getAllhotelSuccess(data.data));
  } catch (error) {
    dispatch(getAllHotelFail(error));
  }
};

const { createNewHotelRequest, createNewHotelSuccess, createNewHotelFail } = createActions({
    CREATE_NEW_HOTEL_REQUEST: () => { },
    CREATE_NEW_HOTEL_SUCCESS: data => data,
    CREATE_NEW_HOTEL_FAIL: error => ({ error }),
});

export const createNewHotel = (hotelID, Name, Country, URL_Image) => async dispatch => {
  dispatch(createNewHotelRequest());
  try {
    const data = await axios.post(`http://localhost:3500/hotels`, {
        hotelID,
        Name,
        Country,
        URL_Image
    });
    dispatch(createNewHotelSuccess(data));
    alert(data.data.message);
  } catch (error) {
    dispatch(createNewHotelFail(error));
  }
};

