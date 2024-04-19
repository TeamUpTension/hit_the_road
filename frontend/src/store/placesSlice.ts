import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Place } from "../types/d";


interface PlacesState {
  places: Place[];
}

const initialState: PlacesState = {
  places: [],
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    // placeList 초기화 액션
    setPlaceList(state, action: PayloadAction<Place[]>) {
      state.places = action.payload;
    },
    // adds 증가 액션
    plusAdds(state, action: PayloadAction<number>) {
      const index = action.payload;
      state.places[index].adds++;
    },
  },
});

export const { setPlaceList, plusAdds } = placesSlice.actions;
export default placesSlice.reducer;

// Thunk 함수: 서버에서 데이터를 가져와서 placeList를 초기화하는 비동기 작업을 수행합니다.
// export const fetchPlaceList = (): AppThunk => async dispatch => {
//     try {
//       const response = await axios.get('/getPlaceList'); // 서버에서 데이터 가져오기
//       dispatch(setPlaceList(response.data)); // 가져온 데이터로 placeList를 초기화합니다.
//     } catch (error) {
//       console.error('Failed to fetch place list:', error);
//     }
//   };
