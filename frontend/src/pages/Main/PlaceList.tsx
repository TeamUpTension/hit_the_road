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

interface Place {
    name: string;
    address: string;
    adds: number;
    views: number;
}

const PlaceList: React.FC = () => {
    const [placeList, setPlaceList] = useState<Place[]>([
        { name: "낫띵리튼", address: "한국, 서울", adds: 39, views: 150 },
        { name: "낫띵리튼", address: "한국, 서울", adds: 39, views: 150 },
        { name: "낫띵리튼", address: "한국, 서울", adds: 39, views: 150 },
        { name: "낫띵리튼", address: "한국, 서울", adds: 39, views: 150 },
    ]);

    const handleAdd = (index: number) => {
        setPlaceList(prevState =>
            prevState.map((place, i) =>
                i === index ? { ...place, adds: place.adds + 1 } : place
            )
        );
    };

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
                {placeList.map((item, i) => (
                    <PlaceItem key={i} index={i} place={item} onAdd={() => handleAdd(i)} />
                ))}
            </List>
        </Container>
        <Footer />
    </>
    )
}

export default PlaceList;

interface PlaceItemProps {
    index: number;
    place: Place;
    onAdd: () => void;
}
const PlaceItem: React.FC<PlaceItemProps> = ({ index, place, onAdd }) => {
    return (
        <ItemLink to="/place-detail">
            <ItemImage>
                <KeepButton onClick={onAdd}>
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
    width: 33.333%;
    padding: 1rem 0.3rem;
    cursor: pointer;
    &:hover {
        /* background: #eeeeed; */
        /* box-shadow: 0 0 5px; */
    }
`;
const ItemImage = styled.div`
    aspect-ratio: 3/4;
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
const ItemTitle = styled.p`
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

