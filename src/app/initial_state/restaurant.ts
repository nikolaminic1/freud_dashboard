import {
  RestaurantModel,
  RestaurantsArrayModel,
} from "../models/RestaurantModel";
import { Status } from "../service/Status";
import { JWTResponseModel, RoleModel, UserModel } from "../models/UserModel";

const initialRestaurantState: RestaurantModel = {
  id: 0,
  name: "",
  backgroundImage: "",
  description: "",
  isNonStop: "",
  logoImage: "",
  priceOfDelivery: 0,
  productCategories: [],
  status: "OPEN",
  timeClose: "",
  timeOpen: "",
};

const initialRestaurantsState: RestaurantsArrayModel = {
  status: Status.IDLE,
  restaurants: [],
  error: "",
};

export { initialRestaurantState, initialRestaurantsState };
