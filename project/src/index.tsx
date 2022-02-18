import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import Login from './components/login/login';
import Favorites from './components/favorites/favorites';
import Room from './components/room/room';
import NonFound from './components/not-found/not-found';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const Settings = {
  PLACES_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App placesCount={Settings.PLACES_COUNT}/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/offer' element={<Room/>}/>
        <Route path='*' element={<NonFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
