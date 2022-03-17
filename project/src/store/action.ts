import {createAction} from '@reduxjs/toolkit';

export const changeCityAction = createAction('changeCity', (value) => ({payload: value}));

export const loadOffersAction = createAction('loadOffers', (value) => ({payload: value}));
