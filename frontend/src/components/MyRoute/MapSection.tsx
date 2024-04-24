import styled from "styled-components";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { GoogleMaps } from "../Map/GoogleMaps";
// import { FaSearch } from "react-icons/fa";
// import { MdPlace } from "react-icons/md";

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

export default function MapSection() {
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
            {/* // <SearchComponent>
        //     <div>
        //         <FaSearch />
        //         <input type="text" placeholder="장소검색" />
        //     </div>
        //     <ul>
        //         <li>
        //             <span> <MdPlace /></span>
        //             <div>
        //                 <p>어디</p>
        //                 <p>경기 성남시 어쩌구</p>
        //             </div>
        //         </li>
        //         <li>
        //             <span> <MdPlace /></span>
        //             <div>
        //                 <p>어디</p>
        //                 <p>경기 성남시 어쩌구</p>
        //             </div>
        //         </li>
        //     </ul>
        // </SearchComponent> */}
        </Wrapper>
    )
}

const SearchComponent = styled.div`
    position: absolute;
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
        border: 2px solid white;
        border-radius: 2rem;
        &:focus-within {
            border: 2px solid ${(props) => props.theme.colors.primary};
        }
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
