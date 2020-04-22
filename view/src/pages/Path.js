import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './Home';
import Add from './Add';

const Path = () => {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/add' exact component={Add} />
      </Switch>
    </div>
  );
};

export default Path;
