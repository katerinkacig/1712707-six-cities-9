import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ReviewsProcess} from '../../types/state';

const initialState: ReviewsProcess = {
  reviews: [],
};

export const reviewsProcess = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {
    loadReviewsAction: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const {loadReviewsAction} = reviewsProcess.actions;
