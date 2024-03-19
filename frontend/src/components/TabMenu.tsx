import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaRoute, FaMapMarkerAlt } from "react-icons/fa";

const TabMenu: React.FC = () => {
    return (
        <>
            <Tab>
                <TabLink to="/route-list"><FaRoute /> 여행루트</TabLink>
                <TabLinkOutline to="/place-list"><FaMapMarkerAlt /> 장소</TabLinkOutline>
            </Tab>
            <SubTitle>인기있는 여행장소를 둘러보세요</SubTitle>
            <ButtonBox>
                <ButtonRound>한국</ButtonRound>
                <ButtonRound>일본</ButtonRound>
                <ButtonRound>대만</ButtonRound>
                <ButtonRound>중국</ButtonRound>
                <ButtonRound>미국</ButtonRound>
                <ButtonRound>호주</ButtonRound>
                <ButtonRound>베트남</ButtonRound><dd></dd>
            </ButtonBox>
        </>
    )
}

export default TabMenu;

const Tab = styled.div`
    display: flex;
    padding: 20px 0;
`;
const TabLink = styled(Link)`
    min-width: 120px;
    padding: 0.5em;
    font-size: 1em;
    background: black;
    color: white;
    border: 1px solid black;
    text-align: center;
    `;
const TabLinkOutline = styled(Link)`
    min-width: 120px;
    padding: 0.5em;
    font-size: 1em;
    background: white;
    color: black;
    border: 1px solid black;
    text-align: center;
`;
const SubTitle = styled.h5`
    font-size: 0.9rem;
    padding-left: 0.3rem;
    margin-bottom: 15px;
`;
const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    /* 가로스크롤 */
    overflow: auto;
    white-space: nowrap;
    /* 기본 스크롤바 숨기기 */
    &::-webkit-scrollbar {
        display:none;
    }
`;
const ButtonRound = styled.button`
    min-width: 5rem;
    padding: 10px;
    margin: 0 0.1rem;
    border-radius: 2rem;
    border: 1px solid #c2c2c2;
    &:hover {
        background: #eeeeee;
    }
`;