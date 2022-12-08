import {
  createImageService,
  createProductService,
} from "../../../service/product/createProductService";
import store from "../../../store";

export const createProductAction = (data: any) => {
  return async () => {
    await store.dispatch(createProductService(data));
  };
};

export const createImageAction = (data: any) => {
  return async () => {
    await store.dispatch(createImageService(data));
  };
};
