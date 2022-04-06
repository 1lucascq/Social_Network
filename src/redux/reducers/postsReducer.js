import { createReducer } from "@reduxjs/toolkit";
import { newPostAction } from "../../actions";

const initialState = [
      {
    user: {
      username: 'bj',
      id: '007'
    },
    post: {
      title: 'My name is',
      content: 'Bond, James Bond',
      postedAt: new Date('6/5/21').getTime()
    },
  }
]

const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(newPostAction, (state, action) => {
      state.push(action.payload)
  });
    // .addCase(action, (state, action) => {...callback...});
    // or builder..addCase(action, (state, action) => {...callback...});
});

export default postsReducer;
