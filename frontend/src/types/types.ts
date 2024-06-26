export interface DisplayPosition {
  longitude: number;
  latitude: number;
  longitudeDelta: number;
  latitudeDelta: number;
  zoom: number;
}

export interface Place {
  stationId: string;
  stationName: string;
  latitude: number;
  longitude: number;
}
