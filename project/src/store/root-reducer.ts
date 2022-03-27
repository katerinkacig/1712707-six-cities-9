import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {userProcess} from './user-process/user-process';
import {offerProcess} from './offer-process/offer-process';
import {nearOffersProcess} from './near-offers-process/near-offers-process';
import {reviewsProcess} from './reviews-process/reviews-process';

export const rootReducer = combineReducers({
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.offer]: offerProcess.reducer,
  [NameSpace.nearOffer]: nearOffersProcess.reducer,
  [NameSpace.review]: reviewsProcess.reducer,
});
