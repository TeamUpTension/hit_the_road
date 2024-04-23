import styled from "styled-components";
import Header from "@/components/Header";
import { Container } from "@/styles/StyledComponents";
// import MyRouteTab from "@/components/MyRouteTab";
import { RiDeleteBin6Line, RiBallPenLine, RiChat1Line } from "react-icons/ri";

const MyRouteList: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                {/* <MyRouteTab /> */}
                {/* <AddButton>+</AddButton> */}
                <List>
                    <Item>
                        <p>여행루트제목</p>
                        <div>여행루트</div>
                        <p>생성일자</p>
                        <div>
                            <CircleButton><RiBallPenLine /></CircleButton>
                            <CircleButton><RiDeleteBin6Line /></CircleButton>
                            <CircleButton><RiChat1Line /></CircleButton>
                        </div>
                    </Item>

                </List>
            </Container>
        </>
    )
}
export default MyRouteList;


const CircleButton = styled.button`
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    border: 4px solid;
    border-radius: 100%;
    background: #5c90bd;
    color: white;
    cursor: pointer;
    font-size: 1.3em;

    &:hover {
        background-color: cornflowerblue;
    }
`;
const Container_2 = styled(Container)`
    float: right;
`;
const List = styled.div`
    /* margin: 10px; */
`;
const Item = styled.div`
    border: 1px solid lightgray;
    min-height: 100px;
    padding:2em;
    margin: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: yellow; */
`;

const Wrapper = styled.div`
    display: flex;
`;
const Map = styled.div`
    width: 50%;
    height: 100vh;
    background: lightgray;
`;
const FixedButton = styled.button`
    width: 100%;
    position : fixed;
    bottom : 0;
    padding: 15px;
    background: #ffda23;
    color: black;
    font-size: 1rem;
    font-weight: 600;
`;
const DragDropList = styled.div`
    width: 50%;
`;
const DragDropItem = styled.div<{ isDragging: boolean; isDragOver: boolean }>`
    padding: 10px;
    margin: 5px;
    background-color: ${props => (props.isDragging || props.isDragOver ? '#ddd' : '#f0f0f0')};
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: grab;
    border: ${props => (props.isDragOver ? '2px dashed red' : '1px solid #ddd')}; /* 드롭 위치에 빨간 점선 효과 추가 */
`;