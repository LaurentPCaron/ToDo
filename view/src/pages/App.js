import React from 'react';

import Header from '../organims/Header';
import Path from './Path';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const App = () => {
  return (
    <div align='center'>
      <Router history={createBrowserHistory()}>
        <Header path='/' cy='cyHeader' />
        <Path />
      </Router>
    </div>
  );
};

export default App;
