import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {userProcess} from './user-process/user-process';
import {offerProcess} from './offer-process/offer-process';
import {nearOffersProcess} from './near-offers-process/near-offers-process';
import {reviewsProcess} from './reviews-process/reviews-process';
import {favoriteOffersProcess} from './favorite-offers-process/favorite-offers-process';

export const rootReducer = combineReducers({
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.offer]: offerProcess.reducer,
  [NameSpace.nearOffer]: nearOffersProcess.reducer,
  [NameSpace.favoriteOffer]: favoriteOffersProcess.reducer,
  [NameSpace.review]: reviewsProcess.reducer,
});
