import {createSlice} from '@reduxjs/toolkit';
import {CITIES, NameSpace} from '../../const';
import {OfferProcess} from '../../types/state';
import {Offer} from '../../types/offer';

const FIRST_CITY = CITIES[0];

const initialState: OfferProcess = {
  offers: [],
  activeOffers: [],
  hoveredOffer: null,
  isDataLoaded: false,
  activeCity: FIRST_CITY,
  cities: CITIES,
};

export const offerProcess = createSlice({
  name: NameSpace.offer,
  initialState,
  reducers: {
    changeCityAction: (state, action) => {
      state.activeCity = action.payload;
      state.activeOffers = state.offers.filter((offer) => (offer as Offer).city.name === state.activeCity);
    },
    loadOffersAction: (state, action) => {
      state.offers = action.payload;
      state.activeOffers = state.offers.filter((offer) => (offer as Offer).city.name === state.activeCity);
      state.isDataLoaded = true;
    },
    sortActiveOffersAction: (state, action) => {
      state.activeOffers = action.payload;
    },
    setHoveredOfferAction: (state, action) => {
      state.hoveredOffer = action.payload;
    },
  },
});

export const {changeCityAction, loadOffersAction, sortActiveOffersAction, setHoveredOfferAction} = offerProcess.actions;
