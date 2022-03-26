import {createAsyncThunk} from '@reduxjs/toolkit';

import {api} from './index';
import {store} from '../store';
import {Offer} from '../types/offer';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {
  loadNearOffersAction,
  loadOffersAction,
  loadReviewsAction,
  redirectToRoute,
  requireAuthorizationAction
} from './action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token';
import {errorHandle} from '../services/error-handle';
import {Review} from '../types/review';
import {CommentData} from '../types/comment-data';

export const fetchOfferAction = createAsyncThunk(
  'fetchOffers',
  async () => {
    try{
      const { data } = await api.get<Offer[]>(APIRoute.Offers);
      store.dispatch(loadOffersAction(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk(
  'fetchReviews',
  async (hotelId:number) => {
    try{
      const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${hotelId}`);
      store.dispatch(loadReviewsAction(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const addReviewAction = createAsyncThunk(
  'addReview',
  async ({ hotelId, comment }:CommentData) => {
    try{
      const {data} = await api.post<Review[]>(`${APIRoute.Comments}/${hotelId}`, comment);
      store.dispatch(loadReviewsAction(data));
    } catch (error){
      errorHandle(error);
    }
  },
);

export const fetchNearOffersAction = createAsyncThunk(
  'fetchNearOffers',
  async (hotelId:number) => {
    try{
      const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${hotelId}${APIRoute.NearOffers}`);
      store.dispatch(loadNearOffersAction(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'checkAuth',
  async () => {
    try{
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try{
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Root));
    } catch (error){
      errorHandle(error);
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try{
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    } catch (error){
      errorHandle(error);
    }
  },
);
