import axios from 'axios';
import { createActions } from 'redux-actions';
import http from '../../services/http'


const {
  getAllFoodRequest,
  getAllFoodSuccess,
  getAllFoodFail,
} = createActions({
    GET_ALL_FOOD_REQUEST: () => { },
    GET_ALL_FOOD_SUCCESS: data => ({ data }),
    GET_ALL_FOOD_FAIL: error => ({ error }),
});

export const getAllFood = () => async dispatch => {
  dispatch(getAllFoodRequest());
  try {
    const data = await http.get(`https://travel-love.herokuapp.com/foods`)
    dispatch(getAllFoodSuccess(data.data));
  } catch (error) {
    dispatch(getAllFoodFail(error));
  }
};

const {
  getFoodRequest,
  getFoodSuccess,
  getFoodFail,
} = createActions({
    GET_FOOD_REQUEST: () => { },
    GET_FOOD_SUCCESS: data => ({ data }),
    GET_FOOD_FAIL: error => ({ error }),
});

export const getFood = (_id) => async dispatch => {
  dispatch(getFoodRequest());
  try {
    const data = await http.get(`https://travel-love.herokuapp.com/foods/id/${_id}`)
    dispatch(getFoodSuccess(data.data));
  } catch (error) {
    dispatch(getFoodFail(error));
  }
};


const { createNewFoodRequest, createNewFoodSuccess, createNewFoodFail } = createActions({
    CREATE_NEW_Food_REQUEST: () => { },
    CREATE_NEW_Food_SUCCESS: data => data,
    CREATE_NEW_Food_FAIL: error => ({ error }),
});

export const createNewFood = (id, Name, Price, Star_Rating, Description, URL_Image) => async dispatch => {
  dispatch(createNewFoodRequest());
  try {
    const Place = await http.get(`https://travel-love.herokuapp.com/places/${id}`)
    const PlaceID = id;
    const data = await http.post(`https://travel-love.herokuapp.com/foods`, {
      Name,
      PlaceID,
      Place,
      Price,
      Star_Rating,
      Description,
      URL_Image
    });
    dispatch(createNewFoodSuccess(data));
  } catch (error) {
    dispatch(createNewFoodFail(error));
  }
};

const { deleteFoodRequest, deleteFoodSuccess, deleteFoodFail } = createActions({
  DELETE_FOOD_REQUEST: () => { },
  DELETE_FOOD_SUCCESS: data => data,
  DELETE_FOOD_FAIL: error => ({ error }),
});

export const deleteFood = (_id) => async dispatch => {
  dispatch(deleteFoodRequest())
  try {
    console.log(_id);
    const data = await http.delete(`https://travel-love.herokuapp.com/foods/${_id}`);
    dispatch(deleteFoodSuccess(data));
  } catch (error) {
    dispatch(deleteFoodFail(error));
  }
};


const { updateFoodRequest, updateFoodSuccess, updateFoodFail } = createActions({
  UPDATE_FOOD_REQUEST: () => { },
  UPDATE_FOOD_SUCCESS: data => data,
  UPDATE_FOOD_FAIL: error => ({ error }),
});
export const updateFood = (id,Name,placeId, Price, Star_Rating, Description, URL_Image) => async dispatch => {
  dispatch(updateFoodRequest());
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
      Price,
      Star_Rating,
      Description,
      URL_Image
    });
    console.log('Dataaa', data)
    dispatch(updateFoodSuccess(data));
    console.log('success');
  } catch (error) {
    dispatch(updateFoodFail(error));
  }
  };