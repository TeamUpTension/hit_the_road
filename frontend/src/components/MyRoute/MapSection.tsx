import styled from "styled-components";
import { MdPlace } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

export default function MapSection() {
    return (
        <Map>
            <Div>
                <FaSearch />
                <Input type="text" placeholder="장소검색" />
            </Div>
            <ul>
                <SearchResultLi>
                    <span> <MdPlace /></span>
                    <div>
                        <p>어디</p>
                        <p>경기 성남시 어쩌구</p>
                    </div>
                </SearchResultLi>
                <SearchResultLi>
                    <span> <MdPlace /></span>
                    가</SearchResultLi>
            </ul>
        </Map>
    )
}
const Map = styled.div`
    flex: 1;
    height: 100vh;
    background: lightgray;
`;


const SearchResultLi = styled.li`
    background: white;
    padding: 0.9rem;
    border-top: 1px solid #d8d8d8;
    display: flex;
    margin: 0 1rem;

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
`;
const Div = styled.div`
    background: white;
    display: flex;
    align-items: center;
    padding: 0.2rem 0.8rem;
    margin: 1rem 1rem 0 1rem;
    color: grey;

    /* width: 80%; */
    
    &:focus-within {
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;
        /* border: 2px solid ${(props) => props.theme.colors.primary}; */
        /* border-radius: 3px; */
        /* width: 100%; */
    }
`;

const Input = styled.input`
    border: none;
    width: inherit;
    /* border: 1px solid black; */
    /* width: 100%; */
    padding: 0.7rem;
    font-size: 1rem;
`;
