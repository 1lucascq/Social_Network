import { configureStore } from '@reduxjs/toolkit';
import user from '../reducers/userReducer';
import posts from '../reducers/postsReducer';
// import counterReducer from '../../src/features/counter/counterSlice';

const store = configureStore({
  reducer: {
    user,
    posts
  },
});

export default store;