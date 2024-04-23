import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MyRoute, MyRoutePlace } from "../types/d";

const initialState: MyRoute = {
  title: "내 루트 이름",
  description: "설명을 작성해주세요",
  placeList: [
    {
      id: 1,
      name: "남산",
      review: "전망이 좋습니다",
    },
    {
      id: 2,
      name: "남대문",
      review: "한",
    },
  ],
};

export const myRouteSlice = createSlice({
  name: "myRoute",
  initialState,
  reducers: {
    addPlace(state: MyRoute, action: PayloadAction<string>) {
      const foundItem = state.placeList.find(
        (item) => item.name === action.payload
      );
      if (!foundItem) {
        const newPlace = {
          id: state.placeList.length++,
          name: action.payload,
          review: "",
        };
        state.placeList = [...state.placeList, newPlace];
      }
    },
    deletePlace(state: MyRoute, action: PayloadAction<number>) {
      state.placeList = state.placeList.filter(
        (place) => place.id != action.payload
      );
    },
    setPlaceList(state: MyRoute, action: PayloadAction<MyRoutePlace[]>) {
      state.placeList = action.payload;
    },
    setTitle(state: MyRoute, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setDescription(state: MyRoute, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    setPlaceReview(state: MyRoute, action: PayloadAction<MyRoutePlace>) {
      const foundItem = state.placeList.find(
        (item) => item.id === action.payload.id
      );
      if (foundItem) {
        foundItem.review = action.payload.review;
        console.log("리뷰작성");
      } else {
        console.log("없음");
      }
    },
  },
});

export const {
  addPlace,
  deletePlace,
  setPlaceList,
  setTitle,
  setDescription,
  setPlaceReview,
} = myRouteSlice.actions;

export default myRouteSlice.reducer;
