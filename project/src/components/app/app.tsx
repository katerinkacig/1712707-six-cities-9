import Main from '../../pages/main/main';
import Spinner from '../spinner/spinner';
import {useAppSelector} from '../../hooks';
import {isCheckedAuth} from '../../utils';
import {Navigate, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites/favorites';
import {offers} from '../../mocks/offers';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NonFound from '../../pages/not-found/not-found';
import React from 'react';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

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

function App(): JSX.Element {
  const {isDataLoaded, authorizationStatus} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Spinner/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route index element={<Main offerOptions={Settings.OFFER_OPTIONS}/>}/>
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus = {authorizationStatus}>
            <Favorites offers={offers} offerOptions = {Settings.OFFER_FAVOURITES_OPTIONS}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={AppRoute.Offer} element={<Navigate to='/'/>}/>
        <Route path={`${AppRoute.Offer}/:id`} element={<Room/>} />
        <Route path='*' element={<NonFound/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
