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
  name: NameSpace.Offer,
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
    changeOfferAction: (state, action) => {
      const newOffer = action.payload;
      const offerIndex = state.offers.findIndex((offer) => offer.id === newOffer.id);
      state.offers.splice(offerIndex, 1, newOffer);

      const activeOfferIndex = state.activeOffers.findIndex((offer) => offer.id === newOffer.id);
      state.activeOffers.splice(activeOfferIndex, 1, newOffer);
    },
  },
});

export const {changeCityAction, loadOffersAction, sortActiveOffersAction, setHoveredOfferAction, changeOfferAction} = offerProcess.actions;
