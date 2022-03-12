import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction} from './action';
import {cities} from '../mocks/cities';
import {offers} from '../mocks/offers';

const FIRST_CITY = cities[0];

const initialState = {
  activeCity: FIRST_CITY,
  activeOffers: offers.filter((offer) => offer.city === FIRST_CITY.title),
  cities,
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.activeCity = action.payload;
      state.activeOffers = state.offers.filter((offer) => offer.city === state.activeCity.title);
    });
});

export {reducer};
