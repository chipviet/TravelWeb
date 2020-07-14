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
    const data = await axios.get(`http://localhost:3500/Foods`)
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

export const createNewFood = (FoodID, Name, Country, URL_Image) => async dispatch => {
  dispatch(createNewFoodRequest());
  try {
    const data = await axios.post(`http://localhost:3500/Foods`, {
        FoodID,
        Name,
        Country,
        URL_Image
    });
    dispatch(createNewFoodSuccess(data));
    alert(data.data.message);
  } catch (error) {
    dispatch(createNewFoodFail(error));
  }
};

