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
import { createImageService } from "../../../service/restaurants/createImageService";
import { initialStateRestaurantRequest } from "../../../initial_state/my_restaurant";

export const createImageSlice = createSlice({
  name: "createImage",
  initialState: initialStateRestaurantRequest,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createImageService.pending, (state, action) => {
        state.status = Status.LOADING;
      })
      .addCase(createImageService.fulfilled, (state, action) => {
        console.log("image slice");
        console.log(action);
        state.isBackgroundUploaded = true;
        state.isLogoUploaded = true;
        state.status = Status.SUCCEED;
      })
      .addCase(createImageService.rejected, (state, action) => {
        state.status = Status.REJECTED;
        // state.error = action.error.message || null;
      });
  },
});

const reducer = createImageSlice.reducer;
export default reducer;
