import { Link } from "react-router-dom";
import styled from "styled-components";
import { RoundButton } from "../../styles/StyledComponents";
import { FaRegUser } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { TbLockSearch } from "react-icons/tb";

const Login: React.FC = () => {
    return (<>
        <LoginContainer>
            <LoginBox>
                <Title>Login</Title>
                <InputLabel htmlFor="id">ID</InputLabel>
                <InputBox>
                    <FaRegUser />
                    <LoginInput name="id" type="text" placeholder="아이디를 입력해주세요" />
                </InputBox>
                <InputLabel htmlFor="pw">Password</InputLabel>
                <InputBox>
                    <FaUnlockKeyhole />
                    <LoginInput name="pw" type="text" placeholder="비밀번호를 입력해주세요" />
                </InputBox>
                <ForgotLink to="/"><TbLockSearch />아이디/비밀번호 찾기</ForgotLink>
                <LoginButton>LOGIN</LoginButton>
                <Link to="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=989988801672-gm6aqscq120kof1jr1f12egppbv9ks2j.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Faccounts%2Fgoogle%2Flogin%2Fcallback%2F&scope=email%20profile&response_type=code&state=HZVEzToKgZmRtvbN&service=lso&o2v=2&theme=mn&ddm=0&flowName=GeneralOAuthFlow">
                    <LoginButton>Google 아이디로 로그인</LoginButton>
                </Link>
                <SignupLink to="/">회원가입</SignupLink>
            </LoginBox>
        </LoginContainer>
    </>)
}
export default Login;

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(./img/layered-peaks-haikei.svg);
    background-size: cover;
    height: 100vh;
`;
const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    color: #4C4637;
    font-weight: bold;
    width: 500px;
    padding: 2em 3em;
    `;
const Title = styled.h3`
    text-align: center;
    font-size: 2em;
    font-weight: 900;
    color: black;
    padding: 1em;
`;
const InputLabel = styled.label`
    font-size: 0.8em;
    padding: 0.5em 0;
`;
const InputBox = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 2px solid lightgray;
    margin-bottom: 20px;
    &:focus-within {
        border-bottom: 2px solid black;
        color: #9F9065;
    }
`;
const LoginInput = styled.input`
    border: none;
    font-size: 1em;
    color: lightgray;
    padding: 10px;
    flex: 1;
`;
const StyledLink = styled(Link)`
    font-size: 0.9em;
    margin: 1em 0 2em 0;
    &:hover {
        color: #9F9065;
    }
`;
const ForgotLink = styled(StyledLink)`
    display: flex;
    justify-content: flex-end;
`;
const SignupLink = styled(StyledLink)`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;
const LoginButton = styled(RoundButton)`
    color: white;
    background: black;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    &:hover {
        background: #1B3D2F;
    }
    width: 100%;
`;