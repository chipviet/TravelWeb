import axios from 'axios';
import { createActions } from 'redux-actions';

const {
  getAllPlaceRequest,
  getAllPlaceSuccess,
  getAllPlaceFail,
} = createActions({
    GET_ALL_PLACE_REQUEST: () => { },
    GET_ALL_PLACE_SUCCESS: data => ({ data }),
    GET_ALL_PLACE_FAIL: error => ({ error }),
});

export const getAllPlace = () => async dispatch => {
  dispatch(getAllPlaceRequest());
  try {
    const data = await axios.get(`http://localhost:3500/places`)
    dispatch(getAllPlaceSuccess(data.data));
  } catch (error) {
    dispatch(getAllPlaceFail(error));
  }
};

const { createNewPlaceRequest, createNewPlaceSuccess, createNewPlaceFail } = createActions({
    CREATE_NEW_PLACE_REQUEST: () => { },
    CREATE_NEW_PLACE_SUCCESS: data => data,
    CREATE_NEW_PLACE_FAIL: error => ({ error }),
});

export const createNewPlace = (placeID, Name, Country, URL_Image) => async dispatch => {
  dispatch(createNewPlaceRequest());
  try {
    const data = await axios.post(`http://localhost:3500/places`, {
        placeID,
        Name,
        Country,
        URL_Image
    });
    dispatch(createNewPlaceSuccess(data));
    alert(data.data.message);
  } catch (error) {
    dispatch(createNewPlaceFail(error));
  }
};

