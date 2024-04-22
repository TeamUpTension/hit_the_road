import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/routes", () => {
    return HttpResponse.json([
      {
        id: 1,
        title: "서울 고궁투어",
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
        id: 2,
        title: "부산 해운대 맛집",
        address: "한국, 부산",
        likes: 39,
        views: 150,
        placeList: [],
      },
      {
        id: 3,
        title: "10월 베트남 다낭",
        address: "한국, 서울",
        likes: 39,
        views: 150,
        imgUrl: "./routeImg/logo_norwester.png",
        placeList: [],
      },
      {
        id: 4,
        title: "걷기 좋은 벚꽃 길",
        address: "한국, 서울",
        likes: 39,
        views: 150,
        imgUrl: "./routeImg/logo_norwester.png",
        placeList: [],
      },
    ]);
  }),
  http.get("/places", () => {
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
  http.get("/routes/:routeId", () => {
    return HttpResponse.json({
      id: 1,
      title: "걷기 좋은 벚꽃 길",
      description: "한강으로 이어진 길로 자전거 타기에도 걷기도 좋은 길 입니다",
      address: "한국, 서울",
      likes: 39,
      views: 150,
      imgUrl: "./routeImg/logo_norwester.png",
      placeList: [
        { id: 1, name: "성내천 벚꽃길", review: "한적하고 걷기 좋은 길" },
        { id: 2, name: "아산병원", review: "벚꽃이 가장 많은 스팟이에요" },
      ],
    });
  }),
  http.get("/places/:placeId", () => {
    return HttpResponse.json({
      id: 4,
      name: "인사동",
      address: "한국, 서울",
      openingHours: "9am - 18pm",
      adds: 39,
      views: 150,
      reviews: [
        {
          userName: "user1234",
          content: "다양한 소품을 구경할 수 있어요",
        },
        {
          userName: "user1234",
          content: "다양한 소품을 구경할 수 있어요",
        },
        {
          userName: "user1234",
          content: "다양한 소품을 구경할 수 있어요",
        },
        {
          userName: "user1234",
          content: "다양한 소품을 구경할 수 있어요",
        },
      ],
      images: [
        "/routeImg/logo_norwester.png",
        "/routeImg/logo_norwester.png",
        "/routeImg/logo_norwester.png",
        "/routeImg/logo_norwester.png",
        "/routeImg/logo_norwester.png",
      ],
    });
  }),
];
