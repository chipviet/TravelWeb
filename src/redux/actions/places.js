import axios from 'axios';
import { createActions } from 'redux-actions';

// const {
//   getPlaceRequest,
//   getPlaceSuccess,
//   getPlaceFail,
// } = createActions({
//     GET_PLACE_REQUEST: () => { },
//     GET_PLACE_SUCCESS: data => ({ data }),
//     GET_PLACE_FAIL: error => ({ error }),
// });

// export const register = (username, email, password) => async dispatch => {
//   dispatch(getPlaceRequest());
//   try {
//     const data = await axios.post(`http://192.168.1.3:3500/user/signup`, {
//       username,
//       email,
//       password,
//     });
//     dispatch(getPlaceSuccess(data));
//     alert(data.data.message);
//   } catch (error) {
//     dispatch(getPlaceFail(error));
//   }
// };

const { createNewPlaceRequest, createNewPlaceSuccess, createNewPlaceFail } = createActions({
    CREATE_NEW_PLACE_REQUEST: () => { },
    CREATE_NEW_PLACE_SUCCESS: data => data,
    CREATE_NEW_PLACE_FAIL: error => ({ error }),
});

export const createNewPlace = (placeID, Name, Country, URL_Image) => async dispatch => {
  dispatch(createNewPlaceRequest());
  console.warn("Vao day","1", placeID,Name,Country,URL_Image)
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

