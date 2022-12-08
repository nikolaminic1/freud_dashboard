import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import store, { RootState } from "../../../store";
import { JWTResponseModel, UserModel } from "../../../models/UserModel";
import { getRestaurantsService } from "../../../service/user/restaurantService";

export const getRestaurants = () => {
  return async () => {
    await store.dispatch(getRestaurantsService());
  };
};
