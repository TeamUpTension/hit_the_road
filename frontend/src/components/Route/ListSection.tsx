import { useRef, useState } from "react";
import styled from "styled-components";;
import { IoClose } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { RxDragHandleVertical } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa6";

export default function ListSection() {
  const [isEditable, setIsEditable] = useState(false);
  const [review, setReview] = useState('');

  function handleEdit() {
    if (isEditable) {
      // 수정상태에서 클릭하면 리뷰 저장 & 텍스트 상태로 전환
    } else {
      // 수정상태가 아닐때 클릭하면 수정상태로 전환
    }
    setIsEditable(!isEditable)
  }



  const dragItem = useRef<number | null>(null);  // 드래그 할 아이템의 인덱스
  const dragOverItem = useRef<number | null>(null); // 드랍할 위치의 아이템의 인덱스
  // 아이템 리스트를 상태로 관리
  const [list, setList] = useState<string[]>([
    "경복궁",
    "인사동",
    "광장시장",
    "남산타워",
    "삼겹살",
    "청계천",
  ]);
  const [dragOverItemIndex, setDragOverItemIndex] = useState<number | null>(null); // 드롭할 위치의 아이템의 인덱스


  // 드래그 시작 시 호출되는 함수
  const dragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    // 드래그하는 아이템의 인덱스 저장
    dragItem.current = position
  }

  // 드래그 중인 아이템이 다른 아이템 위에 올라갔을 때 호출되는 함수
  const dragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    // 드롭할 위치의 아이템의 인덱스 저장
    dragOverItem.current = position;
    setDragOverItemIndex(position);
    // console.log(e.currentTarget.innerHTML);
  }

  // 아이템을 드랍했을 때 호출되는 함수
  const drop = () => {
    // 드래그 중인 아이템 또는 드롭할 위치가 없을 경우 종료
    if (dragItem.current === null || dragOverItem.current === null) return;

    // 아이템 리스트를 복제하여 수정
    const newList = [...list]
    // 드래그하는 아이템의 값 저장
    const dragItemValue = newList[dragItem.current];
    // 기존 위치에서 아이템 삭제
    newList.splice(dragItem.current, 1);
    // 새로운 위치에 아이템 추가
    newList.splice(dragOverItem.current, 0, dragItemValue);
    // 드래그 및 드롭 상태 초기화
    dragItem.current = null;
    dragOverItem.current = null;
    // 리스트 업데이트
    setList(newList);
    ;

    // 드롭 이벤트가 완료되면 dragOverItemIndex를 null로 설정하여 빨간 점선 효과를 제거
    setDragOverItemIndex(null);
  };
  return (<TimelineUl>
    {
      // 각각의 아이템에 드래그 앤 드롭 이벤트 추가
      list && list.map((item, index) => (
        <TimelineLi key={index} draggable
          isDragging={index === dragItem.current}
          isDragOver={index === dragOverItemIndex}
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}
          onDragOver={(e) => e.preventDefault()}
        >
          <RxDragHandleVertical />
          <PlaceItem>
            <div>
              <p>{item}</p>
              <div>
                <StyledBtn onClick={() => setIsEditable(true)}><FaPen /></StyledBtn>
                <StyledBtn><FaRegImage /></StyledBtn>
                <StyledBtn><IoClose /></StyledBtn>
              </div>
              {/* <StyledBtn><IoClose />&nbsp;삭제</StyledBtn> */}
            </div>
            <div>
              {
                isEditable ?
                  <>
                    <ReviewForm type="text" onChange={(e) => setReview(e.target.value)} value={review} />
                    <StyledBtn onClick={() => setIsEditable(false)}><FaPen />&nbsp;작성</StyledBtn>
                  </> :
                  <p >
                    {/* <FaPen /> 한줄평 남기기  */}
                    {review}
                  </p>
              }
            </div>
          </PlaceItem>
        </TimelineLi>
      ))
    }
  </TimelineUl>)
}


const StyledBtn = styled.button`
    padding: 0.4rem;
    margin: 0 0.3rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    white-space: nowrap;
    background: ${(props) => props.theme.colors.primary};
    border: 2px solid white;
    
    &:focus {
        border: 2px solid black ;
    }
    &:hover {
      background: black;
      color: white
    }
`;


const ReviewForm = styled.input`
    border: none;
    width: 100%;
    font-size: 0.9rem;
    border: 2px solid ${(props) => props.theme.colors.primary};
    padding: 0.2rem;
`;

const PlaceItem = styled.div`
    flex: 1;

    div:first-child {
        padding: 0.5rem 0.5rem 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div:nth-child(2) {
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        color: gray;
        display: flex;
        font-size: 0.9rem;
        
        &:hover {
            color: black;
        }
    }
`;

const TimelineLi = styled.div<{ isDragging: boolean; isDragOver: boolean }>`
    padding: 0.7rem 0.7rem 0.7rem 1rem;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    background: ${props => (props.isDragOver ? '#faf7ed' : 'none')};
    border-bottom: ${props => (props.isDragOver ? '2px dashed red' : '1px solid #ddd')};
    
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