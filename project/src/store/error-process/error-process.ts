import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ErrorProcess} from '../../types/state';

const initialState: ErrorProcess = {
  isServerError: false,
};

export const errorProcess = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setErrorProcessAction: (state, action) => {
      state.isServerError = action.payload;
    },
  },
});

export const {setErrorProcessAction} = errorProcess.actions;
