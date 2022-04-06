import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from './index';
import {store} from '../store';
import {Offer} from '../types/offer';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {redirectToRoute} from './action';
import {requireAuthorizationAction, getLoginAction} from './user-process/user-process';
import {loadOffersAction, changeOfferAction} from './offer-process/offer-process';
import {changeFavoriteOffersAction} from './favorite-offers-process/favorite-offers-process';
import {loadNearOffersAction, changeNearOffersAction} from './near-offers-process/near-offers-process';
import {loadFavoriteOffersAction} from './favorite-offers-process/favorite-offers-process';
import {loadReviewsAction} from './reviews-process/reviews-process';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token';
import {errorHandle} from '../services/error-handle';
import {Review} from '../types/review';
import {CommentData} from '../types/comment-data';
import {FavoriteOfferData} from '../types/favorite-offer-data';

export const fetchOfferAction = createAsyncThunk(
  'offers/fetch',
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
  'reviews/fetch',
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
  'reviews/add',
  async ({ hotelId, comment }:CommentData) => {
    let result;
    try{
      const {data} = await api.post<Review[]>(`${APIRoute.Comments}/${hotelId}`, comment);
      store.dispatch(loadReviewsAction(data));
      result = 'success';
    } catch (error){
      result = 'error';
      errorHandle(error);
    }

    return result;
  },
);

export const fetchNearOffersAction = createAsyncThunk(
  'nearOffers/fetch',
  async (hotelId:number) => {
    try{
      const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${hotelId}${APIRoute.NearOffers}`);
      store.dispatch(loadNearOffersAction(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk(
  'favoriteOffers/fetch',
  async () => {
    try{
      const { data } = await api.get<Offer[]>(APIRoute.FavoriteOffers);
      store.dispatch(loadFavoriteOffersAction(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const changeFavoriteOfferAction = createAsyncThunk(
  'favoriteOffers/change',
  async ({ hotelId, status }:FavoriteOfferData) => {
    try{
      const {data} = await api.post<Offer>(`${APIRoute.FavoriteOffers}/${hotelId}/${status}`);
      store.dispatch(changeOfferAction(data));
      store.dispatch(changeNearOffersAction(data));
      store.dispatch(changeFavoriteOffersAction(data));
    } catch (error){
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
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
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
      store.dispatch(getLoginAction(data.email));
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
