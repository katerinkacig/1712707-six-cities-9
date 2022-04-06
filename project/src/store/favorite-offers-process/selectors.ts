import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';

export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.FavoriteOffer].favoriteOffers;
