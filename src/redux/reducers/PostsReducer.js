import { createReducer } from "@reduxjs/toolkit";
import { newPostAction } from "../../actions";

const initialState = {
  posts: [{
    user: {
      username: '',
      id: ''
    },
    post: {
      text: '',
      date: ''
    },
  }]
};
// O post deve ter a estrutura citada acima;
const signUpReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(newPostAction, (state, action) => {
      state.posts.push(action.payload)
  });
    // .addCase(action, (state, action) => {...callback...});
    // or builder..addCase(action, (state, action) => {...callback...});
});

export default signUpReducer;
