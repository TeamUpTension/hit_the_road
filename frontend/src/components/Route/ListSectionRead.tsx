import styled from "styled-components";
import { MyRoutePlace } from "../../types/d";

interface ListSectionReadProps {
  placeList: MyRoutePlace[];
}

const ListSectionRead: React.FC<ListSectionReadProps> = ({ placeList }) => {
  return (
    <TimelineUl>
      {
        placeList && placeList.map((item: MyRoutePlace) => (
          <li key={item.id} >
            <p>{item.name}</p>
            {item.review && <p>{item.review}</p>}
          </li>
        ))
      }
    </TimelineUl>
  )
}

const TimelineUl = styled.ul`
    flex: 1;
    border-left: 3px solid ${(props) => props.theme.colors.primary};
    height: 80vh;

    li {
      padding: 1rem 0 1rem 1.5rem;
      position: relative;
      cursor: pointer;

      /* 동그란 원 */
      &:before {
          content: "";
          display: block;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          border: 3px solid ${(props) => props.theme.colors.primary};
          position: absolute;
          left: -12px;
      }

      &:hover {
        background: #faf7ed;
      }
    }

    p:first-child {
      font-weight: bold;
    }

    p:last-child {
      padding: 0.7rem 0;
      color: #525252;
    }
`;

export default ListSectionRead;