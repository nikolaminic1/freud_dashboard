import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import store, { RootState } from "../../../store";
import {
  createRestaurantHoursService,
  createRestaurantService,
} from "../../../service/restaurants/createRestaurantService";

export const createRestaurant = (data: object) => {
  return async () => {
    await store.dispatch(createRestaurantService(data));
  };
};

export const createBusinessHours = (data: object) => {
  return async () => {
    let mondayData = Object(data)["monday"];
    let tuesdayData = Object(data)["tuesday"];
    let wednesdayData = Object(data)["wednesday"];
    let thursdayData = Object(data)["thursday"];
    let fridayData = Object(data)["friday"];
    let saturdayData = Object(data)["saturday"];
    let sundayData = Object(data)["sunday"];

    let mondayNonStop = Object(data)["mondayNonStop"];
    let tuesdayNonStop = Object(data)["tuesdayNonStop"];
    let wednesdayNonStop = Object(data)["wednesdayNonStop"];
    let thursdayNonStop = Object(data)["thursdayNonStop"];
    let fridayNonStop = Object(data)["fridayNonStop"];
    let saturdayNonStop = Object(data)["saturdayNonStop"];
    let sundayNonStop = Object(data)["sundayNonStop"];

    const mondayNonStopList: boolean[] = [];
    const tuesdayNonStopList: boolean[] = [];
    const wednesdayNonStopList: boolean[] = [];
    const thursdayNonStopList: boolean[] = [];
    const fridayNonStopList: boolean[] = [];
    const saturdayNonStopList: boolean[] = [];
    const sundayNonStopList: boolean[] = [];

    mondayNonStopList.push(mondayNonStop);
    tuesdayNonStopList.push(tuesdayNonStop);
    wednesdayNonStopList.push(wednesdayNonStop);
    thursdayNonStopList.push(thursdayNonStop);
    fridayNonStopList.push(fridayNonStop);
    saturdayNonStopList.push(saturdayNonStop);
    sundayNonStopList.push(sundayNonStop);

    let newData: Object = {
      mondayData: mondayData == undefined ? [] : mondayData,
      tuesdayData: tuesdayData == undefined ? [] : tuesdayData,
      wednesdayData: wednesdayData == undefined ? [] : wednesdayData,
      thursdayData: thursdayData == undefined ? [] : thursdayData,
      fridayData: fridayData == undefined ? [] : fridayData,
      saturdayData: saturdayData == undefined ? [] : saturdayData,
      sundayData: sundayData == undefined ? [] : sundayData,
      mondayNonStop: mondayNonStopList,
      tuesdayNonStop: tuesdayNonStopList,
      wednesdayNonStop: wednesdayNonStopList,
      thursdayNonStop: thursdayNonStopList,
      fridayNonStop: fridayNonStopList,
      saturdayNonStop: saturdayNonStopList,
      sundayNonStop: sundayNonStopList,
    };

    await store.dispatch(createRestaurantHoursService(newData));
  };
};
