import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './components/app/app';
import Favorites from './pages/favorites/favorites';
import Login from './pages/login/login';
import NonFound from './pages/not-found/not-found';
import PrivateRoute from './components/private-route/private-route';
import Room from './pages/room/room';
import {AuthorizationStatus, AppRoute} from './const';

const Settings = {
  PLACES_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App placesCount={Settings.PLACES_COUNT}/>}></Route>
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus = {AuthorizationStatus.NoAuth}>
            <Favorites/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={AppRoute.Offer} element={<Room/>} />
        <Route path='*' element={<NonFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
