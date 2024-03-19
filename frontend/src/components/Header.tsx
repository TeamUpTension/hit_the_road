import logo from '/logo_norwester.png';
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FaRoute, FaSearch } from "react-icons/fa";

const Header: React.FC = () => {
    return (
        <OuterBox>
            <InnerBox>
                {/* left */}
                <Link to="/home">
                    <LogoImg src={logo} alt="Hit the road logo" />
                </Link>
                {/* center */}
                <SearchWrapper>
                    <Select>
                        <option>여행루트</option>
                        <option>장소</option>
                    </Select>
                    <SearchInput type="search" placeholder="지역 검색"></SearchInput>
                    <SearchButton><FaSearch /></SearchButton>
                </SearchWrapper>
                {/* right */}
                <div>
                    <Link to="/route-write">
                        <ButtonOutline><FaRoute /> 내 루트</ButtonOutline>
                    </Link>
                    <Link to="/login">
                        <ButtonOutline>로그인</ButtonOutline>
                    </Link>
                    <Link to="/login">
                        <Button>회원가입</Button>
                    </Link>
                </div>
            </InnerBox>
        </OuterBox>
    )
}

export default Header;

const OuterBox = styled.header`
    background: white;
`;
const InnerBox = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`;
const LogoImg = styled.img`
    width: 10rem;
`;
const SearchWrapper = styled.div`
    display: flex;
    /* 안쪽 input들 선택시 바깥 div 테두리 */
    &:focus-within {
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;
        border: 3px solid ${(props) => props.theme.colors.primary};
        border-radius: 3px;
    }
`;
const Select = styled.select`
    padding: 0 15px;
    border: 1px solid lightgray;
    cursor: pointer;
`;
const SearchInput = styled.input`
    padding: 0 15px;
    border: none;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
`;
const purseAnimation = keyframes`
     0% { box-shadow: 0 0 0 0 #ffda23; }
`;
const SearchButton = styled.button`
    padding: 10px 15px;
    border: 1px solid lightgray;
    background-color: black;
    color: white;
    &:hover,
    &:focus {
        animation: ${purseAnimation} 1s;
        box-shadow: 0 0 0 2em transparent;
    }
`;
const Button = styled.button`
    margin: 0.5em;
    padding: 0.6em;
    font-size: 0.9em;
    font-weight: 600;
    background: black;
    color: white;
    &:hover {
        background: #3d3d3d;
    }
`;
const ButtonOutline = styled.button`
    margin: 0.5em;
    padding: 0.6em;
    font-size: 0.9em;
    font-weight: 600;
    background: white;
    color: black;
    &:hover {
        background: #ffda23;
    }
`;