import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Route } from "../types/d";


interface RoutesState {
  routes: Route[];
}

const initialState: RoutesState = {
  routes: [],
};

export const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    setRouteList(state, action: PayloadAction<Route[]>) {
      state.routes = action.payload;
    },
    toogleLikes(state, action: PayloadAction<number>) {
      const index = action.payload;
      // state.routes[index].adds++;
    },
  },
});

export const { setRouteList, toogleLikes } = routesSlice.actions;
export default routesSlice.reducer;

// Thunk 함수: 서버에서 데이터를 가져와서 placeList를 초기화하는 비동기 작업을 수행합니다.
// export const fetchPlaceList = (): AppThunk => async dispatch => {
//     try {
//       const response = await axios.get('/getPlaceList'); // 서버에서 데이터 가져오기
//       dispatch(setPlaceList(response.data)); // 가져온 데이터로 placeList를 초기화합니다.
//     } catch (error) {
//       console.error('Failed to fetch place list:', error);
//     }
//   };
