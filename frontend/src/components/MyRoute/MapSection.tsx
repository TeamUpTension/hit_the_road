import styled from "styled-components";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { GoogleMaps } from "../Map/GoogleMaps";
import { FaSearch } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
// import trees from '@/data/trees';
import { useEffect, useState } from "react";

const render = (status: Status) => {
    switch (status) {
        case Status.LOADING:
            return <div>로딩중...</div>;
        case Status.FAILURE:
            return <div>에러 발생</div>;
        case Status.SUCCESS:
            return <div>로드 성공</div>;
    }
};
const API_KEY: string = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
const MAP_ID: string = import.meta.env.VITE_GOOGLE_MAP_ID;

export default function MapSection() {
    const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = useState(3); // initial zoom
    const [center, setCenter] = useState<google.maps.LatLngLiteral>({
        lat: 0,
        lng: 0,
    });

    const onClick = (e: google.maps.MapMouseEvent) => {
        // avoid directly mutating state
        setClicks([...clicks, e.latLng!]);
    };

    const onIdle = (m: google.maps.Map) => {
        console.log("onIdle");
        setZoom(m.getZoom()!);
        setCenter(m.getCenter()!.toJSON());
    };

    if (!API_KEY) {
        return <div>Cannot display the map: google maps api key missing</div>;
    }
    return (
        <Div>
            <Wrapper apiKey={API_KEY} render={render}>
                <GoogleMaps
                    mapId={MAP_ID}
                    onClick={onClick}
                    onIdle={onIdle}
                >
                    {clicks.map((latLng, i) => (<Marker key={i} position={latLng} />))}
                </GoogleMaps>
                <SearchComponent>
                    <div>
                        <FaSearch />
                        {/* <label htmlFor="lat">Latitude</label>
                    <input
                        type="number"
                        id="lat"
                        name="lat"
                        value={center.lat}
                        onChange={(event) =>
                            setCenter({ ...center, lat: Number(event.target.value) })
                        }
                    /> */}
                        <input type="text" placeholder="장소검색" />
                    </div>
                    {/* <ul>
                    <li>
                        <span> <MdPlace /></span>
                        <div>
                            <p>어디</p>
                            <p>경기 성남시 어쩌구</p>
                        </div>
                    </li>
                    <li>
                        <span> <MdPlace /></span>
                        <div>
                            <p>어디</p>
                            <p>경기 성남시 어쩌구</p>
                        </div>
                    </li>
                </ul> */}
                </SearchComponent>
            </Wrapper>
        </Div>
    )
}

// type Point = google.maps.LatLngLiteral & { key: string };
// type Props = { points: Point[] };

// const Markers = ({ points }: Props) => {
//     return (
//         <>
//             {points.map((point) => (<AdvancedMarker position={point} key={point.key}>
//                 <span>🌳</span>
//             </AdvancedMarker>))}
//         </>
//     )
// }

const Marker: React.FC<google.maps.marker.AdvancedMarkerElementOptions> = (options) => {
    const [marker, setMarker] = useState<google.maps.marker.AdvancedMarkerElement>();

    useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.marker.AdvancedMarkerElement());
        }
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        }
    }, [marker]);

    useEffect(() => {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options]);

    return null;
};

const Div = styled.div`
    flex: 1;
    height: "100vh";
    position: "relative";
`
const SearchComponent = styled.div`
    position: absolute;
    left: 62%;
    top: 25%;
    background: white;
    border: 1px solid #d8d8d8;
    border-radius: 2rem;
    box-shadow: 0 10px 20px rgba(107, 106, 106, 0.19), 0 6px 6px rgba(194, 194, 194, 0.23);

    > div:first-child {
        display: flex;
        align-items: center;
        padding: 0.2rem 0.8rem;
        margin: 0.1rem 0.5rem;
        color: grey;
        /* border: 3px solid white; */
        /* border-radius: 2rem; */
        /* &:focus-within {
            border-bottom: 3px solid ${(props) => props.theme.colors.primary};
        } */
        input {
            border: none;
            padding: 0.7rem;
            font-size: 1rem;
        }
    }

    ul {
        li {
            cursor: pointer;
            display: flex;
            padding: 0.9rem;
            margin: 0.2rem 1rem;
            border-top: 1px solid #d8d8d8;
            &:hover {
                background-color: #f8f5f5;
            }
            span:first-child {
                padding-right: 1rem;
                color: #b5b3b3;
            }
            p:last-child {
                color: grey;
                padding-top: 0.3rem;
                font-size: 0.8rem;
            }
        }
    }
`;
