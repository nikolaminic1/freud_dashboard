import { Status } from "../service/Status";

export interface RoleModel {
  roleName: string;
}

export interface RestaurantModel {
  id: number;
  name: string;
  backgroundImage: string;
  description: string;
  isNonStop: string;
  logoImage: string;
  priceOfDelivery: 0;
  productCategories: [];
  status: string;
  timeClose: string;
  timeOpen: string;
}

export interface RestaurantsArrayModel {
  status: Status;
  error: string | null;
  restaurants: RestaurantModel[];
}
