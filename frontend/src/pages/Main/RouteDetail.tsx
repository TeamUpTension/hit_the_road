import styled from "styled-components";
import ListSectionRead from "../../components/Route/ListSectionRead";
import MapSectionRead from "../../components/Route/MapSectionRead";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../styles/StyledComponents";
import { FaShareAlt } from "react-icons/fa";
import { FaCheck, FaChevronLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "../../types/d";

const RouteDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [route, setRoute] = useState<Route | null>(null);

    useEffect(() => {
        axios.get<Route>(`/routes/${id}`)
            .then((response) => {
                // console.log("요청")
                setRoute(response.data)
                // console.log(response.data)
            }).catch((error) => {
                console.log("Error fetching route detail", error);
            })
    }, [])

    // 이전 페이지로 이동
    const navigate = useNavigate();
    const handleClickBackBtn = () => {
        navigate(-1);
    }

    if (!route) {
        return <></>;
    }
    return (<>
        <NavBox>
            <button onClick={handleClickBackBtn}>
                <FaChevronLeft />
            </button>
            <div>{route.title}</div>
            <div></div>
            {/* <button><FaShareAlt /></button> */}
        </NavBox>
        <Container>
            <Description>✨ {route.description}</Description>
            <Wrapper>
                <ListSectionRead placeList={route.placeList} />
                <MapSectionRead />
            </Wrapper>
        </Container>
        {/* <FixedButton><FaCheck /> 여행루트 담기</FixedButton> */}
    </>)
}
const NavBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    button {
        padding: 0.8rem;
        &:hover {
            background: ${(props) => props.theme.colors.primary};
            border-radius: 1rem;
        }
    }
`;
const Wrapper = styled.div`
    display: flex;
`;
const Description = styled.div`
    background: #faf7ed;
    padding: 1.4rem;
    margin: 0 0.8rem 1rem 0.8rem;
    color: #525252;
    font-size: 0.8rem;
    border-radius: 0.8rem;
`;

const FixedButton = styled.button`
    width: 100%;
    position : fixed;
    bottom : 0;
    padding: 15px;
    background: ${(props) => props.theme.colors.primary};
    color: black;
    font-size: 1rem;
    font-weight: 600;
`;

export default RouteDetail;