import { createSlice } from "@reduxjs/toolkit";
import {
  initialStateRestaurantCreation,
  initialStateRestaurantRequest,
} from "../../../initial_state/my_restaurant";
import { initialRestaurantsState } from "../../../initial_state/restaurant";
import {
  createRestaurantHoursService,
  createRestaurantService,
} from "../../../service/restaurants/createRestaurantService";
import { Status } from "../../../service/Status";

export const createRestaurantSlice = createSlice({
  name: "createRestaurant",
  initialState: initialStateRestaurantRequest,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createRestaurantService.pending, (state, payload) => {
        state.status = Status.LOADING;
      })
      .addCase(createRestaurantService.fulfilled, (state, action) => {
        state.status = Status.SUCCEED;
        state.isCreated = true;
        console.log(action.payload.data.business);
      })
      .addCase(createRestaurantService.rejected, (state, action) => {
        state.status = Status.REJECTED;
        state.error = action.error.message || null;
      })

      // -------------------------

      .addCase(createRestaurantHoursService.pending, (state, action) => {
        state.status = Status.LOADING;
      })
      .addCase(createRestaurantHoursService.fulfilled, (state, action) => {
        state.status = Status.SUCCEED;
        state.isBusinessTimeCreated = true;
      })
      .addCase(createRestaurantHoursService.rejected, (state, action) => {
        state.status = Status.REJECTED;
        state.isBusinessTimeCreated = false;
      });
  },
});

const reducer = createRestaurantSlice.reducer;
export default reducer;
