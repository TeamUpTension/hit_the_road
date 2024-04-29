import { Status, Wrapper } from "@googlemaps/react-wrapper";
import GoogleMap from "../Map/GoogleMap";
import MarkerContainer from "../Map/MarkerContainer";

const API_KEY: string = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const render = (status: Status) => {
    switch (status) {
        case Status.LOADING:
            return <div>로딩중...</div>;
        case Status.FAILURE:
            return <div>에러 발생</div>;
        case Status.SUCCESS:
            return (<>
                <GoogleMap />
                <MarkerContainer />
            </>);
    }
};

function MapSectionRead() {
    return (
        <Wrapper id="mapWrapper" apiKey={API_KEY} render={render} libraries={['marker']} />
    )
}

export default MapSectionRead