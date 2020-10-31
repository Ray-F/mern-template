import React, { Component } from 'react';
import MainRouter from './MainRouter';

import 'normalize.css';
import '../styling/style.scss';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <MainRouter />
      </React.Fragment>
    );
  }

}

export default App;
