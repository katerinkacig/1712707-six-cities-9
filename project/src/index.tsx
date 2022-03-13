import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import Favorites from './pages/favorites/favorites';
import Login from './pages/login/login';
import NonFound from './pages/not-found/not-found';
import PrivateRoute from './components/private-route/private-route';
import Room from './pages/room/room';
import {AuthorizationStatus, AppRoute} from './const';
import {offers} from './mocks/offers';
import {store} from './store';

const Settings = {
  OFFER_OPTIONS: {
    imgSize: {
      width: '260',
      height: '200',
    },
    placeCardImgWrapClass: 'cities__image-wrapper',
    placeCardClass: 'cities__place-card',
  },
  OFFER_FAVOURITES_OPTIONS: {
    imgSize: {
      width: '150',
      height: '110',
    },
    placeCardImgWrapClass: 'favorites__image-wrapper',
    placeCardClass: 'favorites__card',
    placeCardInfoClass: 'favorites__card-info',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <Routes>
          <Route index element={
            <App offerOptions = {Settings.OFFER_OPTIONS}/>
          }
          />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus = {AuthorizationStatus.Auth}>
              <Favorites offers={offers} offerOptions = {Settings.OFFER_FAVOURITES_OPTIONS}/>
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.Offer} element={<Navigate to='/'/>}/>
          <Route path={`${AppRoute.Offer}/:id`} element={<Room/>} />
          <Route path='*' element={<NonFound/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
