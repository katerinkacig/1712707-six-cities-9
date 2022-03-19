import { createReducer } from '@reduxjs/toolkit';
import {changeCityAction, loadOffersAction, requireAuthorizationAction} from './action';
import {AuthorizationStatus, cities} from '../const';
import { Offer, City } from '../types/offer';

const FIRST_CITY = cities[0];

type initialState = {
  activeCity: City
  activeOffers: Offer[],
  cities: City[],
  offers: Offer[],
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
}

const initialState = {
  offers: [],
  activeCity: FIRST_CITY,
  activeOffers: [],
  cities,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.activeCity = action.payload;
      state.activeOffers = state.offers.filter((offer) => (offer as Offer).city.name === state.activeCity.name);
    })
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;

      state.cities.forEach((city) => {
        const offerByCity = state.offers.find((offer) => (offer as Offer).city.name === city.name);
        if (offerByCity) {
          (city as City).location = (offerByCity as Offer).location;
          if (city.name === state.activeCity.name) {
            (state.activeCity as City).location = (offerByCity as Offer).location;
          }
        }
      });

      state.activeOffers = state.offers.filter((offer) => (offer as Offer).city.name === state.activeCity.name);

      state.isDataLoaded = true;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
