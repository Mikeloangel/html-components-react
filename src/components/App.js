import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Selector from './Selector';

import { cityList } from '../utils/data';

function App() {
  function handleSelectorSelect(element){
    console.log(element)
  }

  return (
    <div className='base'>
      <Header />

      <main className='top-block'>

        <Switch>
          <Route exact path='/'>
            <h1>Hello</h1>
          </Route>
          <Route exact path='/selector'>
            <Selector cityList={cityList} onSelect={handleSelectorSelect}/>
          </Route>
          <Route path='*'>
            <h1 className='section'>Not found</h1>
          </Route>
        </Switch>

      </main>
    </div>
  );
}

export default App;
