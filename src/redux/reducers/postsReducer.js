import { createReducer } from "@reduxjs/toolkit";
import { deletePostAction, editPostAction, newPostAction } from "../../actions";
import { initialState } from "./fakePosts";

// const initialState = [
//   {
//     user: {
//       username: "bj",
//       id: "007",
//     },
//     post: {
//       title: "My name is",
//       content: "Bond, James Bond",
//       postedAt: new Date("6/5/21").getTime(),
//     },
//   },
// ];

const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(newPostAction, (state, action) => {
      state.push(action.payload);
    })
    .addCase(editPostAction, (state, {payload}) => {
      state = state.map(({ post }) => {
        if (post.postedAt === payload.postedAt) {
          post.title = payload.title;
          post.content = payload.content;
        }
        return post;
      });
    })
    .addCase(deletePostAction, (state, {payload}) => {
      state = state.filter(({ post }) => post.postedAt !== payload.postedAt)
      return state;
    })
});

export default postsReducer;
