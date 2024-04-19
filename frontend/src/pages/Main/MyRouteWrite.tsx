import styled from "styled-components";;
import ListSection from "../../components/Route/ListSection";
import MapSection from "../../components/Route/MapSection";
import { Link } from "react-router-dom";
import { Container } from "../../styles/StyledComponents";
import { FaCheck } from "react-icons/fa";
import { FaChevronLeft, FaList } from "react-icons/fa6";

export default function MyRouteWrite() {
    return (<>
        {/* <Header /> */}
        <NavBox>
            {/* 뒤로가기 기능으로 바꾸기 */}
            <NavLink to="/route-list"><FaChevronLeft /></NavLink>
            <Wrapper>내 루트 만들기</Wrapper>
            <NavLink to="/my-route-list"><FaList /> 목록</NavLink>
        </NavBox>
        <Container>
            {/* <MyRouteTab /> */}
            <Wrapper>
                <ListSection />
                <MapSection />
            </Wrapper>
        </Container>
        <FixedButton><FaCheck /> 여행루트 저장</FixedButton>
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
