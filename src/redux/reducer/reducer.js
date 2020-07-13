import {combineReducers} from 'redux';

import userReducer from './userReducer';
import placeReducer from './placeReducer';

const reducer = combineReducers({
  user: userReducer,
  place: placeReducer,
});
export default reducer;