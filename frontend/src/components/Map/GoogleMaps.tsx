import { useEffect, useRef, useState } from "react";

const DEFAULT_CENTER = { lat: 48.8566, lng: 2.3522 };
const DEFAULT_ZOOM = 7;
interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
}

export const GoogleMaps: React.FC<MapProps> = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [map, setMap] = useState<google.maps.Map>();
    const style = {
        flex: 1,
        height: "100vh",
        background: "lightgray",
    }

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                center: DEFAULT_CENTER,
                zoom: DEFAULT_ZOOM,
                mapId: '46a6473a976d5b48',
            }))
        }
    }, [ref, map]);

    return (
        <div
            ref={ref}
            style={style}
        />
    );
};