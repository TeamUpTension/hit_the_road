export interface Review {
  id: number;
  userName: string;
  content: string;
}
export interface Place {
  id: number;
  name: string;
  address: string;
  openingHours: string;
  adds: number;
  views: number;
  imgUrl: string;
  reviews?: Review[];
  images: string[];
}

export interface Route {
  id: number;
  title: string;
  description: string;
  address: string;
  likes: number;
  views: number;
  imgUrl: string;
  placeList: Place[];
}

export interface MyRoutePlace {
  id: number;
  name: string;
  review: string;
}

export interface MyRoute {
  title?: string;
  description?: string;
  placeList: MyRoutePlace[];
}

export interface ReviewState {
  userId: string;
  content: string;
}
export interface PlaceDetailState {
  name: string;
  address: string;
  reviews: ReviewState[];
}
export interface RouteDetailState {
  id: string;
  title: string;
  description?: string;
  address?: string;
}
