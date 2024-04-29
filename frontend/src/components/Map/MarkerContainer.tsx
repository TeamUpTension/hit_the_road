import { usePlaces } from "@/hooks/usePlaces";
import Marker from "./Marker";

function MarkerContainer() {
    const { data: places } = usePlaces();

    if (places === undefined) {
        return <></>;
    }

    return places.map(place => (
        <Marker key={place.stationId} place={place} />
    ));
}

export default MarkerContainer