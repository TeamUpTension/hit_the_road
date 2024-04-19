import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusAdds, setPlaceList } from "../../store/placesSlice";
import { RootState } from "../../store/store";
import { CiSquarePlus } from "react-icons/ci";
import { TiPlus } from "react-icons/ti";
import { HiEye } from "react-icons/hi"
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import TabMenu from "../../components/TabMenu";
import Footer from "../../components/Footer";
import { Container } from "../../styles/StyledComponents";
import { Place } from "../../types/d";

export default function PlaceList() {
    // 서버에 장소 목록 요청
    const placeList = useSelector((state: RootState) => state.placesSlice.places);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('/getPlaceList').then((결과) => {
            console.log("/getPlaceList 요청")
            dispatch(setPlaceList(결과.data));
        }).catch(() => {
            console.log('실패함')
        })
    }, []);// 처음 렌더링 때만 실행
    // }, [dispatch]);// 처음 렌더링 때만 실행

    return (<>
        <Header />
        <Container>
            <TabMenu />
            <Wrapper>
                <Title>#서울</Title>
                <AlignSelect>
                    <option>최근등록순</option>
                    <option>추가순</option>
                    <option>조회순</option>
                </AlignSelect>
            </Wrapper>
            <List>
                {
                    placeList &&
                    placeList.map((item, i) => (
                        <PlaceItem key={i} index={i} place={item} />
                    ))
                }
            </List>
        </Container>
        <Footer />
    </>
    )
}

interface PlaceItemProps {
    index: number;
    place: Place;
}
const PlaceItem: React.FC<PlaceItemProps> = ({ index, place }) => {
    let dispatch = useDispatch();
    return (
        <ItemLink to="/place-detail">
            <ItemImage $imgUrl={place.imgUrl}>
                <KeepButton onClick={(e) => {
                    e.stopPropagation;
                    console.log("버튼클릭");
                    dispatch(plusAdds(index));
                }}>
                    <CiSquarePlus />
                </KeepButton>
            </ItemImage>
            <ItemTitle>
                {place.name}
                <div>
                    <span><TiPlus /> {place.adds}&nbsp;&nbsp;&nbsp;</span>
                    <span><HiEye /> {place.views}</span>
                </div>
            </ItemTitle>
            <ItemSubTitle>{place.address}</ItemSubTitle>
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
    width: 25%;
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
    aspect-ratio: 3/4;
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

