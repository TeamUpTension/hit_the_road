import { useRef, useState } from "react";
import styled from "styled-components";

// 드래그 앤 드롭 리스트을 구현한 컴포넌트
const DragDropList: React.FC = () => {
    const dragItem = useRef<number | null>(null);  // 드래그 할 아이템의 인덱스
    const dragOverItem = useRef<number | null>(null); // 드랍할 위치의 아이템의 인덱스
    // 아이템 리스트를 상태로 관리
    const [list, setList] = useState<string[]>([
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6",
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

    return (
        <>
            <AddButton>+</AddButton>
            {
                // 각각의 아이템에 드래그 앤 드롭 이벤트 추가
                list && list.map((item, index) => (
                    <DragDropItem key={index} draggable
                        isDragging={index === dragItem.current}
                        isDragOver={index === dragOverItemIndex}
                        onDragStart={(e) => dragStart(e, index)}
                        onDragEnter={(e) => dragEnter(e, index)}
                        onDragEnd={drop}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        {index}
                        {item}
                    </DragDropItem>
                ))
            }
        </>
    )
};

const DragDropItem = styled.div<{ isDragging: boolean; isDragOver: boolean }>`
    padding: 10px;
    margin: 5px;
    background-color: ${props => (props.isDragging || props.isDragOver ? '#ddd' : '#f0f0f0')};
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: grab;
    border: ${props => (props.isDragOver ? '2px dashed red' : '1px solid #ddd')}; /* 드롭 위치에 빨간 점선 효과 추가 */
`;

const AddButton = styled.button`
    background: #F93B69;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 8px #202020;

    /* 폰트 */
    font-size: 2em;
    font-weight: 300;
    color: white;

    /* 위에 띄우기 */
    position: absolute;
    bottom: 350px;
    right: 20px;
    
    cursor: pointer;
`;

export default DragDropList;