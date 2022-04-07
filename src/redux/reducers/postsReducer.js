import { createReducer, current } from "@reduxjs/toolkit";
import { deletePostAction, editPostAction, newPostAction } from "../../actions";

const initialState = [
  {
    user: {
      username: "bj",
      id: "007",
    },
    post: {
      title: "My name is",
      content: "Bond, James Bond",
      postedAt: new Date("6/5/21").getTime(),
    },
  },
];
console.log(editPostAction);
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
      console.log('state no reducer :::::::::::::::', current(state));
      console.log('state no reducer :::::::::::::::', current(state).filter(({ post }) => post.postedAt !== payload.postedAt));
      state = state.filter(({ post }) => post.postedAt !== payload.postedAt)
      return state;
    })
  // or builder..addCase(action, (state, action) => {...callback...}); deletePostAction
});

export default postsReducer;
