import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FaRoute, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const TabMenu: React.FC = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    const handleTabClick = (path: string) => {
        setActiveTab(path);
    };

    return (
        <>
            <Tab>
                <TabLink to="/routes" onClick={() => handleTabClick('/routes')} isActive={activeTab === '/routes'}><FaRoute /> 여행루트</TabLink>
                <TabLink to="/places" onClick={() => handleTabClick('/places')} isActive={activeTab === '/places'}><FaMapMarkerAlt /> 장소</TabLink>
            </Tab>
            {activeTab === '/routes' ? <SubTitle>여행 루트를 탐색해보세요</SubTitle> : <SubTitle>인기있는 여행장소를 둘러보세요</SubTitle>}
            <ButtonBox>
                <ButtonRound>한국</ButtonRound>
                <ButtonRound>일본</ButtonRound>
                <ButtonRound>대만</ButtonRound>
                <ButtonRound>중국</ButtonRound>
                <ButtonRound>미국</ButtonRound>
                <ButtonRound>호주</ButtonRound>
                <ButtonRound>베트남</ButtonRound>
            </ButtonBox>
        </>
    )
}

export default TabMenu;

const Tab = styled.div`
    display: flex;
    padding: 20px 0;
`;
const TabLink = styled(Link) <{ isActive: boolean }>`
    min-width: 120px;
    padding: 0.5em;
    font-size: 1em;
    background: ${({ isActive }) => (isActive ? "black" : "white")};
    color: ${({ isActive }) => (isActive ? "white" : "black")};
    border: 1px solid black;
    text-align: center;
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