import { Status } from "../service/Status";
import { StatusModel } from "../service/StatusModel";

export interface MyRestaurantRequestCreation {
  id: number;
  name: string;
  description: string;
}

export interface MyRestaurantResponse {
  data: { business: MyRestaurantRequestCreation };
  isCreated: boolean;
  isBackgroundUploaded: boolean;
  isLogoUploaded: boolean;
  isBusinessTimeCreated: boolean;
  devMessage: string;
  message: string;
  reason: string;
  statusCode: number;
  timeStamp: string;
  status: Status;
  error: string | null;
}
