import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

export const changeCityAction = createAction<string>('changeCity');

export const loadOffersAction = createAction<Offer[]>('loadOffers');

export const loadReviewsAction = createAction<Review[]>('loadReviews');

export const loadNearOffersAction = createAction<Offer[]>('loadNearOffers');

export const sortActiveOffersAction = createAction<Offer[]>('sortActiveOffers');

export const setHoveredOfferAction = createAction<Offer | null>('setHoveredOffer');

export const requireAuthorizationAction = createAction<AuthorizationStatus>('requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
