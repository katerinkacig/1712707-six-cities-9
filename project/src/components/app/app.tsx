import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import Main from '../../pages/main/main';
import Spinner from '../spinner/spinner';
import {useAppSelector} from '../../hooks';
import {isCheckedAuth} from '../../utils';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NonFound from '../../pages/not-found/not-found';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {isDataLoaded} = useAppSelector(({OFFERS}) => OFFERS);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Spinner/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus = {authorizationStatus}>
            <FavoritesPage/>
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
