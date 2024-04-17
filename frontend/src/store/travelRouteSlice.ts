import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Place {
  name: string;
}

interface TravelRouteState {
  title: string;
  discription: string;
  placeList: Place[];
}
const initialState: TravelRouteState = {
  title: "",
  discription: "",
  placeList: [{ name: "잠실" }, { name: "석촌호수" }, { name: "송리단길" }],
};

export const travelRouteSlice = createSlice({
  name: "travelRoute",
  initialState,
  reducers: {
    addPlace(state, action: PayloadAction<Place>) {
      state.placeList = [...state.placeList, action.payload];
    },
    deletePlace(state, action: PayloadAction<string>) {
      state.placeList = state.placeList.filter(
        (place) => place.name != action.payload
      );
    },
    updatePlaceList(state, action: PayloadAction<Place[]>) {
      state.placeList = action.payload;
    },
    updateTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    updateDescription(state, action: PayloadAction<string>) {
      state.discription = action.payload;
    },
  },
});

export const {
  addPlace,
  deletePlace,
  updatePlaceList,
  updateTitle,
  updateDescription,
} = travelRouteSlice.actions;

// export const selectCount = (state: RootState) => state.counter.count;

export default travelRouteSlice.reducer;
