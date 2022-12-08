import {
  MyRestaurantResponse,
  MyRestaurantRequestCreation,
} from "../models/MyRestaurant";
import { Status } from "../service/Status";
import { StatusModel } from "../service/StatusModel";

const initialStateStatus: StatusModel = {
  statusCode: 0,
  statusDesc: "",
};

const initialStateRestaurantCreation: MyRestaurantRequestCreation = {
  id: 0,
  name: "",
  description: "",
};

const initialStateRestaurantRequest: MyRestaurantResponse = {
  data: { business: initialStateRestaurantCreation },
  isCreated: false,
  isBackgroundUploaded: false,
  isLogoUploaded: false,
  isBusinessTimeCreated: false,
  devMessage: "",
  message: "",
  reason: "",
  statusCode: 0,
  timeStamp: "",
  status: Status.IDLE,
  error: "",
};

export {
  initialStateStatus,
  initialStateRestaurantRequest,
  initialStateRestaurantCreation,
};
