import { createAsyncThunk } from "@reduxjs/toolkit";
import { JWTResponseModel, UserModel } from "../../models/UserModel";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authApi, genericApi, jwtApi, loginApi, noAuthApi } from "../Api";
import store from "../../store";
import {
  RestaurantModel,
  RestaurantsArrayModel,
} from "../../models/RestaurantModel";
import { ResponseModel, ValidationErrors } from "../../models/Request";
import { MyRestaurantResponse } from "../../models/MyRestaurant";
import { AxiosError } from "axios";

export const createRestaurantService = createAsyncThunk(
  "/business/owner/save",
  async (data: object, { rejectWithValue }) => {
    console.log(data);
    try {
      const response = await jwtApi().post("/business/owner/save", data);
      console.log(response.data);
      return await response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const createRestaurantHoursService = createAsyncThunk(
  "/time_opened/owner/save",
  async (data: object, { rejectWithValue }) => {
    console.log(data);

    try {
      const response = await jwtApi().post("/time_opened/owner/save", data);

      console.log(response.data);
      return await response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const uploadLogo = createAsyncThunk(
  "/business/owner/save",
  async (data: object) => {
    console.log(data);

    try {
      const response = await genericApi().patch("/business/owner/save", data);
      console.log(response.data);

      return (await response.data) as ResponseModel;
    } catch (err) {
      console.log(err);
      throw Error;
    }
  }
);

export const uploadBackgroundImage = createAsyncThunk(
  "/business/owner/save",
  async (data: object) => {
    console.log(data);

    try {
      const response = await genericApi().patch("/business/owner/save", data);
      console.log(response.data);

      return (await response.data) as ResponseModel;
    } catch (err) {
      console.log(err);
      throw Error;
    }
  }
);

export const createCategory = createAsyncThunk(
  "/business/product/product_categories/save",
  async (data: object) => {
    console.log(data);

    try {
      const response = await genericApi().patch(
        "/business/product/product_categories/save",
        data
      );
      console.log(response.data);

      return (await response.data) as ResponseModel;
    } catch (err) {
      console.log(err);
      throw Error;
    }
  }
);

export const uploadCategoryImage = createAsyncThunk(
  "/business/product/product_categories/image",
  async (data: object) => {
    console.log(data);

    try {
      const response = await genericApi().patch(
        "/business/product/product_categories/image_save",
        data
      );
      console.log(response.data);

      return (await response.data) as ResponseModel;
    } catch (err) {
      console.log(err);
      throw Error;
    }
  }
);
