import styled from "styled-components";
import { Link } from "react-router-dom";
import { FixedButton, Container } from "../../styles/StyledComponents";
import { FaChevronLeft, FaRegMap } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { FaMapMarkerAlt, FaShareAlt } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";

const PlaceDetail: React.FC = () => {
    return (
        <>
            <NavBox>
                <NavLink to="/place-list">
                    <FaChevronLeft />
                </NavLink>
                <span>인사동 쌈지길</span>
                <NavLink to="/"><FaShareAlt /></NavLink>
            </NavBox>
            <Container>
                <PlaceImage>이미지슬라이드</PlaceImage>
                <PlaceInfo>
                    <PlaceInfoLi><FaMapMarkerAlt /> 주소 </PlaceInfoLi>
                    <PlaceInfoLi><MdAccessTime /> 운영시간</PlaceInfoLi>
                    <PlaceInfoLi><FaRegMap /> 지도보기</PlaceInfoLi>
                </PlaceInfo>
                <ul>
                    <PlaceReaviewLi><span>아이디</span>리뷰</PlaceReaviewLi>
                    <PlaceReaviewLi><span>아이디</span>리뷰</PlaceReaviewLi>
                    <PlaceReaviewLi><span>아이디</span>리뷰</PlaceReaviewLi>
                    <PlaceReaviewLi><span>아이디</span>리뷰</PlaceReaviewLi>
                </ul>
            </Container>
            <Link to="route-write"><FixedButton><TiPlus /> 내 여행루트에 담기</FixedButton></Link>
        </>
    )
}

export default PlaceDetail;

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
const PlaceImage = styled.div`
    width: 100%;
    min-height: 400px;
    background: #eceae4;
`;
const PlaceInfo = styled.ul`
    padding: 20px;
    border-bottom: 1px solid #eceae4;
`;
const PlaceInfoLi = styled.li`
    padding: 10px;
`;
const PlaceReaviewLi = styled.li`
    padding: 1.3rem;
    margin: 1.3rem 0.2rem;
    background: #f8f6f1;
`;