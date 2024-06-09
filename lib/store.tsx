import { configureStore } from "@reduxjs/toolkit";
import { PlayerApi } from "./Slice/PlayerApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [PlayerApi.reducerPath]: PlayerApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(PlayerApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
