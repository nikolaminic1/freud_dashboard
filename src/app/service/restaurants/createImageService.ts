import { createAsyncThunk } from "@reduxjs/toolkit";
import { JWTResponseModel, UserModel } from "../../models/UserModel";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authApi, genericApi, jwtApi, loginApi, noAuthApi } from "../Api";
import store from "../../store";
import {
  RestaurantModel,
  RestaurantsArrayModel,
} from "../../models/RestaurantModel";

export const createImageService = createAsyncThunk(
  "/images/uploads",
  async (data: FormData) => {
    try {
      // const response = await jwtApi().post("/images/upload", data);
      // console.log(response);

      return;
      // return response.data;
    } catch (err) {
      console.log(err);
      throw Error;
    }
  }
);
