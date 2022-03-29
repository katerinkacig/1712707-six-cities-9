import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FavoriteOffersProcess} from '../../types/state';

const initialState: FavoriteOffersProcess = {
  favoriteOffers: [],
};

export const favoriteOffersProcess = createSlice({
  name: NameSpace.favoriteOffer,
  initialState,
  reducers: {
    loadFavoriteOffersAction: (state, action) => {
      state.favoriteOffers = action.payload;
    },
    changeFavoriteOffersAction: (state, action) => {
      const offer = action.payload;
      if(offer.isFavorite) {
        state.favoriteOffers = [...state.favoriteOffers, offer];
      } else{
        state.favoriteOffers.splice(state.favoriteOffers.indexOf(offer), 1);
      }
    },
  },
});

export const {loadFavoriteOffersAction, changeFavoriteOffersAction} = favoriteOffersProcess.actions;
