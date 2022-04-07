import { configureStore } from '@reduxjs/toolkit';
import user from '../reducers/userReducer';
import posts from '../reducers/postsReducer';

const store = configureStore({
  reducer: {
    user,
    posts
  },
});

export default store;