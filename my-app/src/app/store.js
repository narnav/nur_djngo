import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import prodReducer from '../features/counter/prodSlice';
import loginReducer from '../features/counter/loginSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    prod:prodReducer,
    login:loginReducer
  },
});
