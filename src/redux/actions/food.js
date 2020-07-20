import axios from 'axios';
import { createActions } from 'redux-actions';

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
    const data = await axios.get(`https://travel-love.herokuapp.com/foods`)
    console.log('food',data)
    dispatch(getAllFoodSuccess(data.data));
  } catch (error) {
    dispatch(getAllFoodFail(error));
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
    const Place = await axios.get(`https://travel-love.herokuapp.com/places/${id}`)
    const PlaceID = id;
    const data = await axios.post(`https://travel-love.herokuapp.com/foods`, {
      Name,
      PlaceID,
      Place,
      Price,
      Star_Rating,
      Description,
      URL_Image
    });
    dispatch(createNewFoodSuccess(data));
    alert(data.data.message);
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
    const data = await axios.delete(`https://travel-love.herokuapp.com/foods/${_id}`);
    dispatch(deleteFoodSuccess(data));
  } catch (error) {
    dispatch(deleteFoodFail(error));
  }
};