import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  JWTResponseModel,
  UserModel,
  UserStateResponseModel,
} from "../../models/UserModel";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authApi, loginApi, noAuthApi } from "../Api";
import store from "../../store";

export const authorizeUser = createAsyncThunk(
  "/login_thunk",
  async (data: object) => {
    try {
      const response = await loginApi().post("", data);
      const res = (await response.data) as JWTResponseModel;
      return res;
    } catch (err) {
      console.log(err);
      throw Error;
    }
  }
);

export const getUser = createAsyncThunk("/get_user", async () => {
  try {
    const response = await authApi().get("/me");
    console.log(response.data);

    return (await response.data.data) as UserStateResponseModel;
  } catch (err) {
    console.log(err);
    throw Error;
  }
});
