import { CiSquarePlus } from "react-icons/ci";
import { GoHeartFill } from "react-icons/go";
import { HiEye } from "react-icons/hi"
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import TabMenu from "../../components/TabMenu";
import Footer from "../../components/Footer";
import { Container } from "../../styles/StyledComponents";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setRouteList, toogleLikes } from "../../store/routesSlice";
import { Route } from "../../types/d";

export default function RouteList() {
    const routeList = useSelector((state: RootState) => state.routesSlice.routes);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('/getRouteList').then((결과) => {
            console.log("/getRouteList 요청")
            dispatch(setRouteList(결과.data));
            // setRouteList(결과.data);
        }).catch(() => {
            console.log('실패함')
        })
    }, []); // 처음 렌더링 때만 실행

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
                        <RouteItem key={i} index={i} route={item} />
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
}
const RouteItem: React.FC<RouteItemProps> = ({ index, route }) => {
    const dispatch = useDispatch();
    return (
        <ItemLink to="/route-detail">
            <ItemImage $imgUrl={route.imgUrl}>
                <KeepButton onClick={(e) => {
                    e.stopPropagation;
                    dispatch(toogleLikes(index));
                }}>
                    <CiSquarePlus />
                </KeepButton>
            </ItemImage>
            <ItemTitle>
                {route.title}
                <div>
                    <span><GoHeartFill /> {route.likes}&nbsp;&nbsp;&nbsp;</span>
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
    }
`;
const ItemImage = styled.div<{ $imgUrl: string }>`
    background: lightgray;
    background-image: url(${props => props.$imgUrl});
    background-size: cover;
    background-position: center;
    aspect-ratio: 4/1;
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

