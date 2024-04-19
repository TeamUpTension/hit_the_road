import { useState } from "react";
import styled from "styled-components";;

export default function ListSectionRead() {

  const [list, setList] = useState<string[]>([
    "경복궁",
    "인사동",
    "광장시장",
    "남산타워",
    "삼겹살",
    "청계천",
  ]);


  return (<TimelineUl>
    {
      list && list.map((item, index) => (
        <TimelineLi key={index} >
          <p>{item}</p>
        </TimelineLi>
      ))
    }
  </TimelineUl>)
}

const TimelineLi = styled.div`
    padding: 1.2rem 1.2rem;
    display: flex;
    align-items: center;
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
`;

const TimelineUl = styled.ul`
    flex: 1;
    /* 왼쪽 선 */
    border-left: 3px solid ${(props) => props.theme.colors.primary};
    height: 80vh;
`;