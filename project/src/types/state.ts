import {store} from '../store/index.js';
import {AuthorizationStatus} from '../const';
import {Offer} from './offer';
import {Review} from './review';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
}

export type OfferProcess = {
  offers: Offer[],
  activeOffers: Offer[],
  hoveredOffer: null | Offer,
  isDataLoaded: boolean,
  activeCity: string
  cities: string[],
};

export type NearOffersProcess = {
  nearOffers: Offer[],
};

export type FavoriteOffersProcess = {
  favoriteOffers: Offer[],
};

export type ReviewsProcess = {
  reviews: Review[],
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
