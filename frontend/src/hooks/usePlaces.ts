import { useQuery } from "@tanstack/react-query";
import { getGoogleMapStore } from "../store/googleMapStore.tsx";
import { getDisplayPosition } from "./getDisplayPotision.ts";
import { Place } from "../types/types.ts";

export const fetchPlaces = async () => {
  const googleMap = getGoogleMapStore().getState();
  const { latitudeDelta, longitudeDelta, longitude, latitude } =
    getDisplayPosition(googleMap);

  const Places = await fetch(
    `/getPlaces?latitude=${latitude}&longitude=${longitude}&latitudeDelta=${latitudeDelta}&longitudeDelta=${longitudeDelta}`
  ).then<Place[]>(async (response) => {
    const data = await response.json();
    return data;
  });

  return Places;
};

export const usePlaces = () => {
  return useQuery({
    queryKey: ["Places"],
    queryFn: fetchPlaces,
    refetchOnWindowFocus: false,
  });
};
