import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const store = configureStore({
  reducer: rootReducer,
});
