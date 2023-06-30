import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filmAPI } from "./services/FilmService";
import { api, api2 } from "./services";

const rootReducer = combineReducers({
  [filmAPI.reducerPath]: filmAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(api.middleware, api2.middleware);
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
