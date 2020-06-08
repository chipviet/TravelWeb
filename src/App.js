import React, { Component } from 'react';
import Header from './container/Header';
import Main from './container/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
export default App;