import {
  JWTResponseModel,
  RoleModel,
  UserModel,
} from "../../../models/UserModel";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginApi } from "../../../service/Api";
import { authorizeUser, getUser } from "../../../service/user/userService";
import store from "../../../store";
import { Status } from "../../../service/Status";
import { initialUserStateResponseModel } from "../../../initial_state/user";

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserStateResponseModel,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.status = Status.LOADING;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = Status.SUCCEED;

        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = Status.REJECTED;
        console.log("get user rejected");
      });
  },
});

const reducer = userSlice.reducer;
export default reducer;
