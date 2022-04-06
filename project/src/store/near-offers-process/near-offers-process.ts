import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {NearOffersProcess} from '../../types/state';

const initialState: NearOffersProcess = {
  nearOffers: [],
};

export const nearOffersProcess = createSlice({
  name: NameSpace.NearOffer,
  initialState,
  reducers: {
    loadNearOffersAction: (state, action) => {
      state.nearOffers = action.payload;
    },
    changeNearOffersAction: (state, action) => {
      const newOffer = action.payload;
      const offerIndex = state.nearOffers.findIndex((offer) => offer.id === newOffer.id);
      state.nearOffers.splice(offerIndex, 1, newOffer);
    },
  },
});

export const {loadNearOffersAction, changeNearOffersAction} = nearOffersProcess.actions;
