import {
  JWTResponseModel,
  RoleModel,
  UserModel,
} from "../../../models/UserModel";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateWindow } from "../../../initial_state/window";

export const windowSlice = createSlice({
  name: "window",
  initialState: initialStateWindow,
  reducers: {
    setDimensions(state) {
      state.width = window.innerWidth;
      state.height = window.innerHeight;
    },
  },
});

export const windowReducer = windowSlice.reducer;
