
import { useNavigate } from "react-router-dom";
import { Container, Description, FixedButton, NavBox, Wrapper } from "../../styles/StyledComponents";
import ListSection from "../../components/Route/ListSection";
import MapSection from "../../components/Route/MapSection";
import { FaCheck } from "react-icons/fa";
import { FaChevronLeft, FaList } from "react-icons/fa6";

export default function MyRouteWrite() {
    const navigate = useNavigate();
    const handleClickBackBtn = () => {
        navigate(-1); // 이전 페이지로 이동
    }
    const handleClickListBtn = () => {
        navigate("/my-route");
    }
    return (<>
        <NavBox>
            <button onClick={handleClickBackBtn}><FaChevronLeft /></button>
            <Wrapper>내 루트 만들기</Wrapper>
            <button onClick={handleClickListBtn}><FaList /> 목록</button>
        </NavBox>
        <Container>
            <Description>✨ 설명작성</Description>
            <Wrapper>
                <ListSection />
                <MapSection />
            </Wrapper>
        </Container>
        <FixedButton><FaCheck /> 여행루트 저장</FixedButton>
    </>)
}




