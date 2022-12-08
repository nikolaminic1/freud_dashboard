import {
  JWTResponseModel,
  RoleModel,
  UserModel,
} from "../../../models/UserModel";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialJwtState, initialUserState } from "../../../initial_state/user";
import { loginApi } from "../../../service/Api";
import store from "../../../store";
import { getRestaurantsService } from "../../../service/user/restaurantService";
import { initialRestaurantsState } from "../../../initial_state/restaurant";
import { RestaurantsArrayModel } from "../../../models/RestaurantModel";
import { Status } from "../../../service/Status";

export const restaurantSlice = createSlice({
  name: "getRestaurants",
  initialState: initialRestaurantsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurantsService.pending, (state, action) => {
        state.status = Status.LOADING;
      })
      .addCase(getRestaurantsService.fulfilled, (state, action) => {
        state.status = Status.SUCCEED;
        console.log("rest 2 slice");

        // state.restaurants = action.payload.data.business;
      })
      .addCase(getRestaurantsService.rejected, (state, action) => {
        state.status = Status.REJECTED;
        state.error = action.error.message || null;
      });
  },
});

const reducer = restaurantSlice.reducer;
export default reducer;
