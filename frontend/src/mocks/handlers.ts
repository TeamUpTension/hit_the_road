import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/user", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
  http.get("/getRouteList", () => {
    return HttpResponse.json([
      { name: "서울 고궁투어", address: "한국, 서울", adds: 39, views: 150 },
      { name: "부산 해운대 맛집", address: "한국, 서울", adds: 39, views: 150 },
      { name: "10월 베트남 다낭", address: "한국, 서울", adds: 39, views: 150 },
      { name: "낫띵리튼", address: "한국, 서울", adds: 39, views: 150 },
    ]);
  }),
  http.get("/getPlaceList", () => {
    return HttpResponse.json([
      { name: "서울 고궁투어", address: "한국, 서울", adds: 39, views: 150 },
      { name: "부산 해운대 맛집", address: "한국, 서울", adds: 39, views: 150 },
      { name: "10월 베트남 다낭", address: "한국, 서울", adds: 39, views: 150 },
      { name: "낫띵리튼", address: "한국, 서울", adds: 39, views: 150 },
    ]);
  }),
];
