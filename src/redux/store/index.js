import { configureStore } from '@reduxjs/toolkit';
import signUp from '../reducers/signUpReducer';
// import counterReducer from '../../src/features/counter/counterSlice';

const store = configureStore({
  reducer: {
    signUp,
  },
});

export default store;