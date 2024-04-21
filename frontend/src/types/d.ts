export interface Place {
  id: number;
  name: string;
  address: string;
  adds: number;
  views: number;
  imgUrl: string;
  review?: string;
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

export interface MyRoute {
  title?: string;
  description?: string;
  placeList: []
}

export interface ReviewState {
  userId: string,
  content: string,
}
export interface PlaceDetailState {
  name: string,
  address: string,
  reviews: ReviewState[]
}
export interface RouteDetailState {
  id: string,
  title: string,
  description?: string,
  address?: string
}