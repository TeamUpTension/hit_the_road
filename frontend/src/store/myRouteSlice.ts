import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Place } from "../types/d";

interface MyRouteState {
  title: string;
  discription: string;
  placeList: Place[];
  selectedPlace: string;
}

const initialState: MyRouteState = {
  title: "",
  discription: "",
  placeList: [{
    id: 1,
    name: "남산",
    address: "한국, 서울",
    adds: 39,
    views: 150,
    imgUrl: "./routeImg/logo_norwester.png",
  },
  {
    id: 2,
    name: "남대문",
    address: "한국, 서울",
    adds: 39,
    views: 150,
    imgUrl: "./routeImg/logo_norwester.png",
  }],
  selectedPlace: "",
};

export const myRouteSlice = createSlice({
  name: "myRoute",
  initialState,
  reducers: {
    addPlace(state, action: PayloadAction<Place>) {
      const foundItem = state.placeList.find(
        (item) => item.id === action.payload.id
      );

      if (!foundItem) {
        state.placeList = [...state.placeList, action.payload];
      } else {
      }
    },
    deletePlace(state, action: PayloadAction<string>) {
      state.placeList = state.placeList.filter(
        (place) => place.name != action.payload
      );
    },
    setPlaceList(state, action: PayloadAction<Place[]>) {
      state.placeList = action.payload;
    },
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setDescription(state, action: PayloadAction<string>) {
      state.discription = action.payload;
    },
    setSelectedPlace(state, action: PayloadAction<string>) {
      state.selectedPlace = action.payload;
    },
  },
});

export const {
  addPlace,
  deletePlace,
  setPlaceList,
  setTitle,
  setDescription,
  setSelectedPlace,
} = myRouteSlice.actions;

export default myRouteSlice.reducer;
