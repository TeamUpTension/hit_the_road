import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { GoogleMaps } from "../Map/GoogleMaps";

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

export default function MapSectionRead() {
    const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
    if (!apiKey) {
        return <div>Cannot display the map: google maps api key missing</div>;
    }
    return (
        <Wrapper apiKey={apiKey} render={render} style={{
            flex: 1,
            height: "100vh"
        }} >
            <GoogleMaps />
        </Wrapper>
    )
}
