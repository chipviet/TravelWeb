import axios from 'axios';
import { createActions } from 'redux-actions';



const {
  getAllAttractionRequest,
  getAllAttractionSuccess,
  getAllAttractionFail,
} = createActions({
    GET_ALL_ATTRACTION_REQUEST: () => { },
    GET_ALL_ATTRACTION_SUCCESS: data => ({ data }),
    GET_ALL_ATTRACTION_FAIL: error => ({ error }),
});

export const getAllAttraction = () => async dispatch => {
  dispatch(getAllAttractionRequest());
  try {
    const data = await axios.get(`https://travel-love.herokuapp.com/attractions`)
    dispatch(getAllAttractionSuccess(data.data));
  } catch (error) {
    dispatch(getAllAttractionFail(error));
  }
};

const {
  getAttractionRequest,
  getAttractionSuccess,
  getAttractionFail,
} = createActions({
    GET_ATTRACTION_REQUEST: () => { },
    GET_ATTRACTION_SUCCESS: data => ({ data }),
    GET_ATTRACTION_FAIL: error => ({ error }),
});

export const getAttraction = (_id) => async dispatch => {
  dispatch(getAttractionRequest());
  try {
    const data = await axios.get(`https://travel-love.herokuapp.com/attractions/id/${_id}`)
    dispatch(getAttractionSuccess(data.data));
  } catch (error) {
    dispatch(getAttractionFail(error));
  }
};


const { createNewAttractionRequest, createNewAttractionSuccess, createNewAttractionFail } = createActions({
    CREATE_NEW_attraction_REQUEST: () => { },
    CREATE_NEW_attraction_SUCCESS: data => data,
    CREATE_NEW_attraction_FAIL: error => ({ error }),
});

export const createNewAttraction = (id, Name, Price, Star_Rating, Description, URL_Image) => async dispatch => {
  dispatch(createNewAttractionRequest());
  try {
    const Place = await axios.get(`https://travel-love.herokuapp.com/places/${id}`)
    const PlaceID = id;
    const data = await axios.post(`https://travel-love.herokuapp.com/attractions`, {
      Name,
      PlaceID,
      Place,
      Price,
      Star_Rating,
      Description,
      URL_Image
    });
    dispatch(createNewAttractionSuccess(data));
  } catch (error) {
    dispatch(createNewAttractionFail(error));
  }
};

const { deleteAttractionRequest, deleteAttractionSuccess, deleteAttractionFail } = createActions({
  DELETE_attraction_REQUEST: () => { },
  DELETE_attraction_SUCCESS: data => data,
  DELETE_attraction_FAIL: error => ({ error }),
});

export const deleteAttraction = (_id) => async dispatch => {
  dispatch(deleteAttractionRequest())
  try {
    console.log(_id);
    const data = await axios.delete(`https://travel-love.herokuapp.com/attractions/${_id}`);
    dispatch(deleteAttractionSuccess(data));
  } catch (error) {
    dispatch(deleteAttractionFail(error));
  }
};


const { updateAttractionRequest, updateAttractionSuccess, updateAttractionFail } = createActions({
  UPDATE_attraction_REQUEST: () => { },
  UPDATE_attraction_SUCCESS: data => data,
  UPDATE_attraction_FAIL: error => ({ error }),
});
export const updateAttraction = (id,Name,placeId, Price, Star_Rating, Description, URL_Image) => async dispatch => {
  dispatch(updateAttractionRequest());
  try {
    console.log("id hotel",id)
    console.log('pacleid',placeId)
    const Place = await axios.get(`https://travel-love.herokuapp.com/places/${placeId}`)
    console.log('Place Object',Place);
    const PlaceID = placeId;
    const data = await axios.patch(`https://travel-love.herokuapp.com/hotels/${id}`, {
      Name,
      PlaceID,
      Place,
      Price,
      Star_Rating,
      Description,
      URL_Image
    });
    console.log('Dataaa', data)
    dispatch(updateAttractionSuccess(data));
    console.log('success');
  } catch (error) {
    dispatch(updateAttractionFail(error));
  }
  };