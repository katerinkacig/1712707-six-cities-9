import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {NearOffersProcess} from '../../types/state';

const initialState: NearOffersProcess = {
  nearOffers: [],
};

export const nearOffersProcess = createSlice({
  name: NameSpace.nearOffer,
  initialState,
  reducers: {
    loadNearOffersAction: (state, action) => {
      state.nearOffers = action.payload;
    },
  },
});

export const {loadNearOffersAction} = nearOffersProcess.actions;
