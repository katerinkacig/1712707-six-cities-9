import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../const';
import {UserProcess} from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  login: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorizationAction: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    getLoginAction: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const {requireAuthorizationAction,getLoginAction} = userProcess.actions;
