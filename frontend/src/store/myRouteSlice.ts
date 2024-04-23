import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MyRoute, MyRoutePlace } from "../types/d";

const initialState: MyRoute = {
  title: "내 루트 이름",
  description: "설명을 작성해주세요",
  placeList: [],
};

const findPlaceIndexByName = (placeList: MyRoutePlace[], placeName: string) => {
  return placeList.findIndex((place) => place.name === placeName);
};

export const myRouteSlice = createSlice({
  name: "myRoute",
  initialState,
  reducers: {
    addPlace(state: MyRoute, action: PayloadAction<string>) {
      // 새로운 장소를 추가하기 전에 중복을 확인
      const existingIndex = findPlaceIndexByName(
        state.placeList,
        action.payload
      );
      if (existingIndex === -1) {
        const newPlace: MyRoutePlace = {
          id: state.placeList.length,
          name: action.payload,
          review: "",
        };
        state.placeList.push(newPlace);
      } else {
        alert("이미 내 루트에 추가된 장소입니다.");
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
