import { createReducer } from "@reduxjs/toolkit";
import { signUpAction } from "../../actions";

const initialState = {
  username: '',
  id: ''
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signUpAction, (state, action) => {
      state.username = action.payload.username;
      state.id = action.payload.id;
  });
});

export default userReducer;
