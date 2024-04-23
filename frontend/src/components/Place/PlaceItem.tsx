import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Place } from "../../types/d";
import { CiSquarePlus } from "react-icons/ci";
import { TiPlus } from "react-icons/ti";
import { HiEye } from "react-icons/hi"
import { addPlace } from "../../store/myRouteSlice";

interface PlaceItemProps {
    place: Place;
}

const PlaceItem: React.FC<PlaceItemProps> = ({ place }) => {
    const dispatch = useDispatch();

    const handleAddPlace = (placeName: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(addPlace(placeName));
    }

    return (
        <ItemLink to={`/places/${place.id}`}>
            <ItemImage $imgUrl={place.imgUrl}>
                <KeepButton onClick={(e) => handleAddPlace(place.name, e)}>
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

export default PlaceItem;