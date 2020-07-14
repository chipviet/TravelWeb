import { combineReducers } from 'redux';

import userReducer from './userReducer';
import placeReducer from './placeReducer';
import hotelReducer from './hotelReducer';
import foodReducer from './foodReducer';

const reducer = combineReducers({
  user: userReducer,
  place: placeReducer,
  hotel: hotelReducer,
  food: foodReducer
});
export default reducer;