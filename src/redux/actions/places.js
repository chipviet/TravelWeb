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

export const createNewPlace = (Name, Country, URL_Image) => async dispatch => {
  dispatch(createNewPlaceRequest());
  try {
    const data = await axios.post(`http://localhost:3500/places`, {
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

const { updatePlaceRequest, updatePlaceSuccess, updatePlaceFail } = createActions({
  UPDATE_PLACE_REQUEST: () => { },
  UPDATE_PLACE_SUCCESS: data => data,
  UPDATE_PLACE_FAIL: error => ({ error }),
});

export const updatePlace = (_id, Name, Country, URL_Image) => async dispatch => {
dispatch(updatePlaceRequest());
try {
  const data = await axios.patch(`http://localhost:3500/places/${_id}`, {
      Name,
      Country,
      URL_Image
  });
  dispatch(updatePlaceSuccess(data));
  alert(data.data.message);
} catch (error) {
  dispatch(updatePlaceFail(error));
}
};


const { getPlacebyIdRequest, getPlacebyIdSuccess, getPlacebyIdFail } = createActions({
  GET_PLACE_BY_ID_REQUEST: () => { },
  GET_PLACE_BY_ID_SUCCESS: data => data,
  GET_PLACE_BY_ID_FAIL: error => ({ error }),
});

export const getPlacebyId = (_id, Name, Country, URL_Image) => async dispatch => {
//dispatch(getPlacebyIdRequest());
try {
  console.log("vaoday")
  const data = await axios.get(`http://localhost:3500/places/${_id}`, {
      Name,
      Country,
      URL_Image
  });
  dispatch(getPlacebyIdSuccess(data));
  alert(data.data.message);
} catch (error) {
 // dispatch(getPlacebyIdFail(error));
}
};
