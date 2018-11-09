import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import Main from './appContainer/appContainer.js';

const history = createBrowserHistory();

ReactDOM.render((
    <Router history={history}>
    <Switch>
      {/*<Route exact path="/login" name="Login Page" component={Login}/>*/}
      
      <Route path="/" name="Home" component={Main}/>
    </Switch>
  </Router>
), document.getElementById('app'));