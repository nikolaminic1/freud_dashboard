import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import jwtSlice from "./store/slice/user/jwtSlice";
import userSlice from "./store/slice/user/userSlice";
import restaurantSlice from "./store/slice/restaurant/restaurantSlice";
import { windowReducer, windowSlice } from "./store/slice/window/windowSlice";
import restaurantCreateSlice from "./store/slice/restaurant/restaurantCreateSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  jwt: jwtSlice,
  user: userSlice,
  restaurants: restaurantSlice,
  restaurantCreate: restaurantCreateSlice,
  windowReducer: windowReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
