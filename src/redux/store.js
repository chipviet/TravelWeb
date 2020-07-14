import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';



const composeEnhancers = composeWithDevTools({ realtime: true, port: 3000 });
export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk),
    )
  );


  return store;
};