import styled from "styled-components";
import { Link } from "react-router-dom";
import { Route } from "../../types/d";
import { GoHeartFill } from "react-icons/go";
import { HiEye } from "react-icons/hi"

interface RouteItemProps {
  route: Route;
}
const RouteItem: React.FC<RouteItemProps> = ({ route }) => {
  return (
    <ItemLink to={`/routes/${route.id}`}>
      <ItemImage $imgUrl={route.imgUrl}>
        <KeepButton onClick={(e) => {
          e.stopPropagation();
          // dispatch(toogleLikes(index));
        }}>
          <GoHeartFill />
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
  padding: 1rem;
  font-size: 1.5rem;
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

export default RouteItem;