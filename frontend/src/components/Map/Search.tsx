import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { usePlaces } from "@/hooks/usePlaces";

const Search = () => {

    const { data: places, isLoading, isError } = usePlaces();

    if (isLoading) {
        return <>로딩중...</>;
    }

    if (isError) {
        return <>에러 발생</>;
    }

    return (
        <SearchComponent>
            <div>
                <FaSearch />
                <input type="text" placeholder="장소검색" />
            </div>
            {places && (
                <ul>
                    {places.map((place) => (
                        <li key={place.stationId}>
                            <span> <MdPlace /></span>
                            <div>
                                <p>{place.stationName}</p>
                                <p>경기 성남시 어쩌구</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </SearchComponent>
    )
}

const SearchComponent = styled.div`
    z-index: 10;
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
            margin: 0 1rem;
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

export default Search