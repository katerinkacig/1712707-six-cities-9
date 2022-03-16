import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from './index';
import {store} from '../store';
import {Offer} from '../types/offer';
import {APIRoute} from '../const';
import {loadOffersAction} from './action';

export const fetchOfferAction = createAsyncThunk(
  'fetchOffers',
  async () => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    store.dispatch(loadOffersAction(data));
  },
);
