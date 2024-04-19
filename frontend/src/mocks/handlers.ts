import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/getRouteList", () => {
    return HttpResponse.json([
      {
        name: "서울 고궁투어",
        address: "한국, 서울",
        likes: 1,
        views: 150,
        imgUrl: "./routeImg/logo_norwester.png",
        placeList: [
          {
            id: 1,
            title: "남산",
            address: "한국, 서울",
            adds: 39,
            views: 150,
            imgUrl: "./routeImg/logo_norwester.png",
          },
          {
            id: 2,
            title: "남대문",
            address: "한국, 서울",
            adds: 39,
            views: 150,
            imgUrl: "./routeImg/logo_norwester.png",
          },
          {
            id: 3,
            title: "명동",
            address: "한국, 서울",
            adds: 39,
            views: 150,
            imgUrl: "",
          },
          {
            id: 4,
            title: "인사동",
            address: "한국, 서울",
            adds: 39,
            views: 150,
            imgUrl: "./routeImg/logo_norwester.png",
          },
        ],
      },
      {
        title: "부산 해운대 맛집",
        address: "한국, 부산",
        likes: 39,
        views: 150,
        placeList: [],
      },
      {
        title: "10월 베트남 다낭",
        address: "한국, 서울",
        likes: 39,
        views: 150,
        imgUrl: "./routeImg/logo_norwester.png",
        placeList: [],
      },
      {
        title: "걷기 좋은 벚꽃 길",
        address: "한국, 서울",
        likes: 39,
        views: 150,
        imgUrl: "./routeImg/logo_norwester.png",
        placeList: [],
      },
    ]);
  }),
  http.get("/getPlaceList", () => {
    return HttpResponse.json([
      {
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
      },
      {
        id: 3,
        name: "명동",
        address: "한국, 서울",
        adds: 39,
        views: 150,
        imgUrl: "",
      },
      {
        id: 4,
        name: "인사동",
        address: "한국, 서울",
        adds: 39,
        views: 150,
        imgUrl: "./routeImg/logo_norwester.png",
      },
    ]);
  }),
];
