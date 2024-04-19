import { configureStore } from "@reduxjs/toolkit";
import { myRouteSlice } from "./myRouteSlice";
import { placesSlice } from "./placesSlice";
import { routesSlice } from "./routesSlice";

let store = configureStore({
  reducer: {
    myRouteSlice: myRouteSlice.reducer,
    placesSlice: placesSlice.reducer,
    routesSlice: routesSlice.reducer,
  },
});

// state타입을 export
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
