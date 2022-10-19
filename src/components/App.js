import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Selector from './Selector';

function App() {
  return (
    <div className='base'>
      <Header />

      <Switch>
        <Route exact path='/'>
          <h1>Hello</h1>
        </Route>
        <Route exact path='/selector'>
          <Selector/>
        </Route>
        <Route path='*'>
          <h1 className='section'>Not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
