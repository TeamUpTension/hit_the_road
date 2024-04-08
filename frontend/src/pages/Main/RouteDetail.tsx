import styled from "styled-components";;
import DropDownListRead from "../../components/Route/ListSectionRead";
import MapSectionRead from "../../components/Route/MapSectionRead";
import { Link } from "react-router-dom";
import { Container } from "../../styles/StyledComponents";
import { FaCheck, FaShareAlt } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

export default function RouteDetail() {

    return (<>
        {/* <Header /> */}
        <NavBox>
            <NavLink to="/route-list">
                <FaChevronLeft />
            </NavLink>
            <Wrapper>서울 고궁 투어</Wrapper>
            <NavLink to="/">
            <NavLink to="/"><FaShareAlt /></NavLink>
            </NavLink>
        </NavBox>
        <Container>
            {/* <MyRouteTab /> */}
            <Wrapper>
                <DropDownListRead />
                <MapSectionRead />
            </Wrapper>
        </Container>
        {/* <FixedButton><FaCheck /> 여행루트 저장</FixedButton> */}
    </>)
}
const NavBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0.5em;
    font-size: 1.1rem;
    font-weight: bold;
`;
const NavLink = styled(Link)`
    padding: 5px 10px;
`;

const Wrapper = styled.div`
    display: flex;
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
