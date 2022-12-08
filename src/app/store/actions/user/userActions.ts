import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import store, { RootState } from "../../../store";
import { JWTResponseModel, UserModel } from "../../../models/UserModel";
import { authorizeUser, getUser } from "../../../service/user/userService";

export const loginAction = (data: object) => {
  return async () => {
    console.log("login action");
    await store.dispatch(authorizeUser(data));
    await store.dispatch(getUser());
  };
};

export const getUserAction = () => {
  return async () => {
    await store.dispatch(getUser());
  };
};
