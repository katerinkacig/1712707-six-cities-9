import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {userProcess} from './user-process/user-process';
import {offerProcess} from './offer-process/offer-process';
import {nearOffersProcess} from './near-offers-process/near-offers-process';
import {reviewsProcess} from './reviews-process/reviews-process';
import {favoriteOffersProcess} from './favorite-offers-process/favorite-offers-process';
import {errorProcess} from './error-process/error-process';

export const rootReducer = combineReducers({
  [NameSpace.Error]: errorProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.NearOffer]: nearOffersProcess.reducer,
  [NameSpace.FavoriteOffer]: favoriteOffersProcess.reducer,
  [NameSpace.Review]: reviewsProcess.reducer,
});
