import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const store = configureStore({
  reducer: rootReducer,
});
