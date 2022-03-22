import {createAction} from '@reduxjs/toolkit';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeCityAction = createAction('changeCity', (value) => ({payload: value}));

export const loadOffersAction = createAction('loadOffers', (value) => ({payload: value}));

export const sortActiveOffersAction = createAction('sortActiveOffers', (value) => ({payload: value}));

export const requireAuthorizationAction = createAction<AuthorizationStatus>('requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
