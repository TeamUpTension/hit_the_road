import { http, HttpResponse } from "msw";
import { mockPlaces } from "./data";
import { Place } from "@/types/types.ts";

export const handlers = [
  http.get("/routes", () => {
    return HttpResponse.json([
      {
        id: 1,
        title: "서울 고궁투어",
        address: "한국, 서울",
        likes: 1,
        views: 150,
        imgUrl: "./routeImg/1.jpg",
        placeList: [
          {
            id: 1,
            title: "남산",
            address: "한국, 서울",
            adds: 39,
            views: 150,
            imgUrl: "./routeImg/2.jpg",
          },
          {
            id: 2,
            title: "남대문",
            address: "한국, 서울",
            adds: 39,
            views: 150,
            imgUrl: "./routeImg/3.jpg",
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
            imgUrl: "./routeImg/4.jpg",
          },
        ],
      },
      {
        id: 2,
        title: "부산 해운대 맛집",
        address: "한국, 부산",
        likes: 39,
        views: 150,
        imgUrl: "./routeImg/5.jpg",
        placeList: [],
      },
      {
        id: 3,
        title: "10월 베트남 다낭",
        address: "한국, 서울",
        likes: 39,
        views: 150,
        imgUrl: "./routeImg/6.jpg",
        placeList: [],
      },
      {
        id: 4,
        title: "걷기 좋은 벚꽃 길",
        address: "한국, 서울",
        likes: 39,
        views: 150,
        imgUrl: "./routeImg/7.jpg",
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
        imgUrl: "./routeImg/2.jpg",
      },
      {
        id: 2,
        name: "남대문",
        address: "한국, 서울",
        adds: 39,
        views: 150,
        imgUrl: "./routeImg/3.jpg",
      },
      {
        id: 3,
        name: "명동",
        address: "한국, 서울",
        adds: 39,
        views: 150,
        imgUrl: "./routeImg/4.jpg",
      },
      {
        id: 4,
        name: "인사동",
        address: "한국, 서울",
        adds: 39,
        views: 150,
        imgUrl: "./routeImg/5.jpg",
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
      imgUrl: "./routeImg/1.jpg",
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
        "/routeImg/7.jpg",
        "/routeImg/8.jpg",
        "/routeImg/9.jpg",
        "/routeImg/10.jpg",
        "/routeImg/11.jpg",
        "/routeImg/12.jpg",
        "/routeImg/13.jpg",
      ],
    });
  }),
  http.get(`/getPlaces`, async ({ request }) => {
    const url = new URL(request.url);

    const latitude = url.searchParams.get("latitude");
    const longitude = url.searchParams.get("longitude");
    const latitudeDelta = url.searchParams.get("latitudeDelta");
    const longitudeDelta = url.searchParams.get("longitudeDelta");

    const northEastBoundary = {
      latitude: Number(latitude) + Number(latitudeDelta),
      longitude: Number(longitude) + Number(longitudeDelta),
    };

    const southWestBoundary = {
      latitude: Number(latitude) - Number(latitudeDelta),
      longitude: Number(longitude) - Number(longitudeDelta),
    };

    console.log(
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
      northEastBoundary,
      southWestBoundary
    );

    const isStationLatitudeWithinBounds = (place: Place) => {
      return (
        place.latitude > southWestBoundary.latitude &&
        place.latitude < northEastBoundary.latitude
      );
    };

    const isStationLongitudeWithinBounds = (place: Place) => {
      return (
        place.longitude > southWestBoundary.longitude &&
        place.longitude < northEastBoundary.longitude
      );
    };

    const foundStations = mockPlaces.filter(
      (place) =>
        isStationLatitudeWithinBounds(place) &&
        isStationLongitudeWithinBounds(place)
    );

    return HttpResponse.json(foundStations);
  }),
];
