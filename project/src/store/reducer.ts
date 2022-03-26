import { createReducer } from '@reduxjs/toolkit';
import {
  changeCityAction,
  loadNearOffersAction,
  loadOffersAction,
  loadReviewsAction,
  requireAuthorizationAction, setHoveredOfferAction,
  sortActiveOffersAction
} from './action';
import {AuthorizationStatus, CITIES} from '../const';
import { Offer } from '../types/offer';
import {Review} from '../types/review';

const FIRST_CITY = CITIES[0];

type InitialState = {
  offers: Offer[],
  activeCity: string
  activeOffers: Offer[],
  cities: string[],
  reviews: Review[],
  nearOffers: Offer[],
  hoveredOffer: null | Offer,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
}

const initialState:InitialState = {
  offers: [],
  activeCity: FIRST_CITY,
  activeOffers: [],
  cities: CITIES,
  reviews: [],
  nearOffers: [],
  hoveredOffer: null,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.activeCity = action.payload;
      state.activeOffers = state.offers.filter((offer) => (offer as Offer).city.name === state.activeCity);
    })
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
      state.activeOffers = state.offers.filter((offer) => (offer as Offer).city.name === state.activeCity);
      state.isDataLoaded = true;
    })
    .addCase(loadReviewsAction, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNearOffersAction, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(sortActiveOffersAction, (state, action) => {
      state.activeOffers = action.payload;
    })
    .addCase(setHoveredOfferAction, (state, action) => {
      state.hoveredOffer = action.payload;
    });
});

export {reducer};
