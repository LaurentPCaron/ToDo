import React from 'react';
import Header from '../organims/Header';
import { Route, Switch, Router } from 'react-router-dom';

import history from '../history';
import Home from './Home';
import Add from './Add';
import Update from './Update';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header path='/' cy='cyHeader' />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/todo/add' exact component={Add} />
            <Route path='/todo/edit/:id' exact component={Update} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
