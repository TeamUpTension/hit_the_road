
import { useNavigate } from "react-router-dom";
import { Container, Description, FixedButton, NavBox, NavButton, StyledInput, Wrapper, WrapperAlignCenter } from "../../styles/StyledComponents";
import ListSection from "../../components/MyRoute/ListSection";
import MapSection from "../../components/MyRoute/MapSection";
import { FaCheck } from "react-icons/fa";
import { FaChevronLeft, FaList } from "react-icons/fa6";
import { useState } from "react";
import { StyledBtn } from "../../styles/StyledComponents";
import { FaPen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setDescription, setTitle } from "../../store/myRouteSlice";
import { RootState } from "../../store/store";

export default function MyRouteWrite() {

    const myRoute = useSelector((state: RootState) => state.myRouteSlice);

    const [isEditableTitle, setIsEditableTitle] = useState<boolean>(false);
    const [newTitle, setNewTitle] = useState<string>('');

    const [isEditableDescription, setIsEditableDescription] = useState<boolean>(false);
    const [newDescription, setNewDescription] = useState<string>('');

    const dispatch = useDispatch();
    const handleSetTitle = (title: string) => {
        dispatch(setTitle(title));
        setIsEditableTitle(false);
    }
    const handleSetDescription = (description: string) => {
        dispatch(setDescription(description));
        setIsEditableDescription(false)
    }

    const navigate = useNavigate();
    const handleClickBackBtn = () => {
        navigate(-1); // 이전 페이지로 이동
    }
    const handleClickListBtn = () => {
        navigate("/my-route");
    }


    return (<>
        <NavBox>
            <NavButton onClick={handleClickBackBtn}><FaChevronLeft /></NavButton>
            {isEditableTitle ?
                <Wrapper>
                    <StyledInput type="text" onChange={(e) => setNewTitle(e.target.value)} value={newTitle} />
                    <StyledBtn onClick={() => { handleSetTitle(newTitle) }
                    }><FaPen />&nbsp;작성</StyledBtn>
                </Wrapper>
                :
                <WrapperAlignCenter>
                    {myRoute.title}
                    <StyledBtn onClick={() => { setIsEditableTitle(true) }}><FaPen /></StyledBtn>
                </WrapperAlignCenter>
            }
            <NavButton onClick={handleClickListBtn}><FaList /> 목록</NavButton>
        </NavBox>
        <Container>
            {isEditableDescription ?
                <Description>
                    <StyledInput type="text" onChange={(e) => setNewDescription(e.target.value)} value={newDescription} />
                    <StyledBtn onClick={() => { handleSetDescription(newDescription) }
                    }><FaPen />&nbsp;작성</StyledBtn>
                </Description>
                :
                <Description>✨ {myRoute.description}
                    <StyledBtn onClick={() => { setIsEditableDescription(true) }}><FaPen /></StyledBtn>
                </Description>
            }
            <Wrapper>
                <ListSection />
                <MapSection />
            </Wrapper>
        </Container>
        <FixedButton><FaCheck /> 여행루트 저장</FixedButton>
    </>)
}




