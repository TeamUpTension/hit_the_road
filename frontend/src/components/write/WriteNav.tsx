import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const WriteNav = () => {
    return (
    <Nav>
        <a>
            <FontAwesomeIcon icon={faArrowLeft} />
        </a>
        <span>서울 여행 코스</span>
        <ProfilePic>
            <ProfilePicImg />
            <Notification />
        </ProfilePic>
    </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background: #B97CFC;
    color: #fff;
    padding: 1em 0.5em;
`;
const ProfilePic = styled.div`
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
`;
const ProfilePicImg = styled.div`
    width: 100%;
`;
const Notification = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    top: 0px;
    right: 0px;
    background: #F93B69;
`;

export default WriteNav;