import { useRef, useState } from "react";
import styled from "styled-components";;
import { IoClose } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { RxDragHandleVertical } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setPlaceList, deletePlace, setPlaceReview } from "../../store/myRouteSlice";
import { MyRoutePlace } from "../../types/d";
import { StyledBtn, StyledInput } from "../../styles/StyledComponents";

const ListSection: React.FC = () => {

  const [editableItem, setEditableItem] = useState<number | null>(null);
  const [review, setReview] = useState('');

  const myRoute = useSelector((state: RootState) => state.myRouteSlice);

  const dispatch = useDispatch();
  const handleDragPlace = (places: MyRoutePlace[]) => {
    dispatch(setPlaceList(places))
  }
  const handleDeletePlace = (id: number) => {
    dispatch(deletePlace(id));
  }
  const handleSetPlaceReview = (id: number, review: string) => {
    const data = {
      id: id,
      review: review
    }
    dispatch(setPlaceReview(data));
    setEditableItem(null)
  }

  const dragItem = useRef<number | null>(null);  // 드래그 할 아이템의 인덱스
  const dragOverItem = useRef<number | null>(null); // 드랍할 위치의 아이템의 인덱스
  const [dragOverItemIndex, setDragOverItemIndex] = useState<number | null>(null); // 드롭할 위치의 아이템의 인덱스
  const dragStart = (position: number) => {
    // 드래그 시작 시 - 드래그하는 아이템의 인덱스 저장
    dragItem.current = position
  }
  const dragEnter = (position: number) => {
    // 드래그 중인 아이템이 다른 아이템 위에 올라갔을 때 - 드롭할 위치의 아이템의 인덱스 저장
    dragOverItem.current = position;
    setDragOverItemIndex(position);
  }
  const drop = () => {
    // 드랍했을 때
    // 드래그 중인 아이템 또는 드롭할 위치가 없을 경우 종료
    if (dragItem.current === null || dragOverItem.current === null) return;
    const newList = [...myRoute.placeList]
    const dragItemValue = newList[dragItem.current]; // 드래그하는 아이템의 값 저장
    newList.splice(dragItem.current, 1); // 기존 위치에서 아이템 삭제
    newList.splice(dragOverItem.current, 0, dragItemValue); // 새로운 위치에 아이템 추가
    dragItem.current = null; // 드래그 및 드롭 상태 초기화
    dragOverItem.current = null;
    handleDragPlace(newList); // 리스트 업데이트
    setDragOverItemIndex(null); // 드롭 이벤트가 완료되면 dragOverItemIndex를 null로 설정하여 빨간 점선 효과를 제거
  };
  return (<TimelineUl>
    {
      myRoute.placeList && myRoute.placeList.map((item: MyRoutePlace, index: number) => (
        <TimelineLi key={index} draggable
          isDragging={index === dragItem.current}
          isDragOver={index === dragOverItemIndex}
          onDragStart={() => dragStart(index)}
          onDragEnter={() => dragEnter(index)}
          onDragEnd={drop}
          onDragOver={(e) => e.preventDefault()}
        >
          <RxDragHandleVertical />
          <PlaceItem>
            <div>
              <p>{item.name}</p>
              <div>
                <StyledBtn onClick={() => { setEditableItem(index); setReview(item.review) }}><FaPen /></StyledBtn>
                <StyledBtn><FaRegImage /></StyledBtn>
                <StyledBtn onClick={() => handleDeletePlace(item.id)}><IoClose /></StyledBtn>
              </div>
            </div>
            <div>
              {index === editableItem ?
                <>
                  <StyledInput type="text" onChange={(e) => setReview(e.target.value)} value={review} />
                  <StyledBtn onClick={() => {
                    handleSetPlaceReview(item.id, review)
                  }
                  }><FaPen />&nbsp;작성</StyledBtn>
                </> :
                <p >
                  {item.review}
                </p>
              }
            </div>
          </PlaceItem>
        </TimelineLi>
      ))
    }
  </TimelineUl>)
}
export default ListSection;

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