import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FavoriteOffersProcess} from '../../types/state';

const initialState: FavoriteOffersProcess = {
  favoriteOffers: [],
};

export const favoriteOffersProcess = createSlice({
  name: NameSpace.FavoriteOffer,
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
        const indexOffer = state.favoriteOffers.findIndex((favoriteOffer) => favoriteOffer.id === offer.id);
        state.favoriteOffers.splice(indexOffer, 1);
      }
    },
  },
});

export const {loadFavoriteOffersAction, changeFavoriteOffersAction} = favoriteOffersProcess.actions;
