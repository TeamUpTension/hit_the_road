import { cloneElement, isValidElement, useEffect, useRef, useState, Children } from "react";

const DEFAULT_CENTER = { lat: 48.8566, lng: 2.3522 };
const DEFAULT_ZOOM = 7;

interface MapProps extends google.maps.MapOptions {
    mapId: string
    // style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
    children: object,
}

export const GoogleMaps: React.FC<MapProps> = ({ mapId, children }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [map, setMap] = useState<google.maps.Map>();
    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                center: DEFAULT_CENTER,
                zoom: DEFAULT_ZOOM,
                mapId: mapId,
            }))
        }
    }, [ref, map]);

    return (
        // <div
        //     ref={ref}
        //     style={{
        //         flex: 1,
        //         height: "100vh",
        //     }}
        // ></div>
        <>
            <div
                ref={ref}
                style={{
                    flex: 1,
                    height: "100vh",
                }}
            >
                {Children.map(children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child, { map });
                    }
                })}

            </div>
        </>
    );
};