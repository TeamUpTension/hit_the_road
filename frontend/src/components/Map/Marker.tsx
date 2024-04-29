import { Place } from "@/types/types.ts";
import { useEffect } from "react";
import { useExternalValue } from "external-state";
import { createRoot } from "react-dom/client";
import { getGoogleMapStore } from "@/store/googleMapStore";

function Marker({ place }: { place: Place }) {
  const googleMap = useExternalValue(getGoogleMapStore());

  useEffect(() => {
    const { latitude, longitude, stationName } = place;

    const container = document.createElement('div');

    const markerInstance = new google.maps.marker.AdvancedMarkerElement({
      position: { lat: latitude, lng: longitude },
      map: googleMap,
      title: stationName,
      content: container,
    });

    createRoot(container).render(
      <div
        style={{ backgroundColor: 'red', width: '10px', height: '10px', borderRadius: '50%' }}
      />
    );

    markerInstance.addListener('click', () => {
      googleMap.panTo({ lat: latitude, lng: longitude });
    });

    return () => {
      markerInstance.map = null;
    };
  }, []);

  return <></>
}

export default Marker;