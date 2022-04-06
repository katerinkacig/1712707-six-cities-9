import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';

export const getActiveCity = (state: State): string => state[NameSpace.Offer].activeCity;
export const getActiveOffers = (state: State): Offer[] => state[NameSpace.Offer].activeOffers;
export const getCities = (state: State): string[] => state[NameSpace.Offer].cities;
export const getOffers = (state: State): Offer[] => state[NameSpace.Offer].offers;
export const getHoveredOffer = (state: State): null | Offer => state[NameSpace.Offer].hoveredOffer;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Offer].isDataLoaded;
