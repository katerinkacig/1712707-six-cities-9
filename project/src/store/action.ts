import {createAction} from '@reduxjs/toolkit';
import {AppRoute, AuthorizationStatus} from '../const';
import {City, Offer} from '../types/offer';
import {Review} from '../types/review';

export const changeCityAction = createAction<City>('changeCity');

export const loadOffersAction = createAction<Offer[]>('loadOffers');

export const loadReviewsAction = createAction<Review[]>('loadReviews');

export const loadNearOffersAction = createAction<Offer[]>('loadNearOffers');

export const requireAuthorizationAction = createAction<AuthorizationStatus>('requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
