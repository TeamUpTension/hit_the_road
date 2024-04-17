import { configureStore } from "@reduxjs/toolkit";
import { travelRouteSlice } from "./travelRouteSlice";

let store = configureStore({
  reducer: {
    travelRoute: travelRouteSlice.reducer,
  },
});

// state타입을 export
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
