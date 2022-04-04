import { createReducer } from "@reduxjs/toolkit";
import { newPostAction } from "../../actions";

const initialState = []
// O post deve ter a estrutura citada acima;
const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(newPostAction, (state, action) => {
      state.push(action.payload)
  });
    // .addCase(action, (state, action) => {...callback...});
    // or builder..addCase(action, (state, action) => {...callback...});
});

export default postsReducer;

//  Post format:
//     {
//     user: {
//       username: '',
//       id: ''
//     },
//     post: {
//       title: '',
//       content: '',
//       postedAt: ''
//     },
//   }


