import { createAsyncThunk } from "@reduxjs/toolkit";

export const createImageService = createAsyncThunk(
  "/product/create",
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

export const createProductService = createAsyncThunk(
  "/product/create",
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
