import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { TiPlus } from "react-icons/ti";
import { HiEye } from "react-icons/hi"
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import TabMenu from "../../components/TabMenu";
import Footer from "../../components/Footer";
import { Container } from "../../styles/StyledComponents";
import { useEffect } from "react";
import axios from "axios";

interface Route {
    name: string;
    address: string;
    adds: number;
    views: number;
}

export default function RouteList() {
    let [routeList, setRouteList] = useState<Route[]>([]);

    useEffect(() => {
        axios.get('/getRouteList').then((결과) => {
            console.log("요청성공")
            setRouteList(결과.data);
        }).catch(() => {
            console.log('실패함')
        })
    }, []); // 처음 렌더링 때만 실행

    const handleAdd = (index: number) => {
        // setPlaceList(prevState =>
        //     prevState.map((place, i) =>
        //         i === index ? { ...place, adds: place.adds + 1 } : place
        //     )
        // );
    };

    return (<>
        <Header />
        <Container>
            <TabMenu />
            <Wrapper>
                <Title>여행루트</Title>
                <AlignSelect>
                    <option>최근등록순</option>
                    <option>추가순</option>
                    <option>조회순</option>
                </AlignSelect>
            </Wrapper>
            <List>
                {
                    routeList && routeList.map((item, i) => (
                        <RouteItem key={i} index={i} route={item} onAdd={() => handleAdd(i)} />
                    ))
                }
            </List>
        </Container>
        <Footer />
    </>
    )
}

interface RouteItemProps {
    index: number;
    route: Route;
    onAdd: () => void;
}
const RouteItem: React.FC<RouteItemProps> = ({ index, route, onAdd }) => {
    return (
        <ItemLink to="/route-detail">
            <ItemImage>
                <KeepButton onClick={onAdd}>
                    <CiSquarePlus />
                </KeepButton>
            </ItemImage>
            <ItemTitle>
                {route.name}
                <div>
                    <span><TiPlus /> {route.adds}&nbsp;&nbsp;&nbsp;</span>
                    <span><HiEye /> {route.views}</span>
                </div>
            </ItemTitle>
            <ItemSubTitle>{route.address}</ItemSubTitle>
        </ItemLink>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Title = styled.h3`
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 15px;
    padding-left: 0.3rem;
`;
const AlignSelect = styled.select`
    border: 2px solid lightgray;
    padding: 10px;
    border-radius: 3rem;
    height: 2.5rem;
`;
const List = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const ItemLink = styled(Link)`
    width: 100%;
    padding: 1rem 0.3rem;
    cursor: pointer;
    &:hover {
        /* background: #eeeeed; */
        /* box-shadow: 0 0 5px; */
    }
`;
const ItemImage = styled.div`
    aspect-ratio: 4/1;
    background: lightgray;
    border-radius: 5px;
    /* 담기 버튼 배치를 위한 flex */
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
`;
const KeepButton = styled.button`
    padding: 0.3rem;
    font-size: 2.2rem;
    color: white;
`;
const ItemTitle = styled.div`
    font-size: 0.9rem;
    font-weight: bold;
    margin-top: 0.8rem;
    margin-bottom: 0.3rem;
    display: flex;
    justify-content: space-between;
`;
const ItemSubTitle = styled.span`
    font-size: 0.8rem;
    color: grey;
`;

