import styled from "styled-components";

const WriteFooter = () => {
    return (<FixedFooter>
        <ButtonOutline>취소</ButtonOutline>
        <Button>여행루트 저장</Button>
    </FixedFooter>)
}

const FixedFooter = styled.footer`
    position : fixed;
    bottom : 0;
    background: white;
    width: 100%;
    display: flex;
`;

const ButtonOutline = styled.button`
    flex: 1;
    padding: 10px;
    border: 1px solid #B97CFC;
    background: white;
    color: #B97CFC;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
    font-size: 1.1rem;
`;
/* styled components 공통속성은 어떻게 지정하지 */
const Button = styled.button`
    flex: 1;
    padding: 10px;
    border: 1px solid #B97CFC;
    background: #B97CFC;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
    font-size: 1.1rem;
`;

export default WriteFooter;