import React, {Component} from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import IndexPage from './pages/IndexPage';


class MainRouter extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={IndexPage} />
          <Route path={"/"} component={IndexPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MainRouter;
