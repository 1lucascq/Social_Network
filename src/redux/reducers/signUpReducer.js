import { createReducer } from "@reduxjs/toolkit";
import { signUpAction } from "../../actions";

const initialState = {
  username: "",
};

const signUpReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signUpAction, (state, action) => {
    state.username = action.payload;
  })
    // .addCase(action, (state, action) => {...callback...});
    // or builder..addCase(action, (state, action) => {...callback...});
});

export default signUpReducer;
