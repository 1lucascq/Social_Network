import { createReducer } from "@reduxjs/toolkit";
import { signupAction } from "../../actions";

const initialState = {
  username: "",
};

const signUpReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signupAction, (state, action) => {
    state.username = action.payload;
  })
    // .addCase(action, (state, action) => {...callback...});
    // or builder..addCase(action, (state, action) => {...callback...});
});

export default signUpReducer;
