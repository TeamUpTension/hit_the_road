export interface Place {
  id: number;
  name: string;
  address: string;
  adds: number;
  views: number;
  imgUrl: string;
  myReview?: string;
}

export interface Route {
  id: number;
  title: string;
  description: string;
  address: string;
  likes: number;
  views: number;
  imgUrl: string;
}

export interface MyRoute {
  title?: string;
  description?: string;
  placeList: []
}