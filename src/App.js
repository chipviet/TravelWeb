import React, { Component } from 'react';
import Header from './container/Header';
import Main from './container/Main';
import Footer from './container/Footer'

import { Provider } from 'react-redux';
import configureStore from '../src/redux/store';


const store = configureStore()

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Header />
          <Main />
          <Footer />
        </Provider>
      </div>
    );
  }
}
export default App;