import styled from "styled-components";

const Footer: React.FC = () => {
    return (
        <OuterBox>
            <InnerBox>
                <Ul>
                    <Li>© 2024 Team Uptension</Li>
                    <Li>Terms</Li>
                    <Li>Privacy</Li>
                    <Li>Cookies</Li>
                </Ul>
                <Ul>
                    <Li>team_uptension@gmail.com</Li>
                </Ul>
            </InnerBox>
        </OuterBox>
    )
}

export default Footer;

const OuterBox = styled.footer`
    background: black;
    color: white;
`;
const InnerBox = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0 30px 0;
    font-size: 0.9em;
    display: flex;
    justify-content: space-between;
`;
const Ul = styled.ul`
    display: flex;
`;
const Li = styled.li`
    padding: 15px;
    &:nth-child(2), &:nth-child(3), &:nth-child(4) {
        cursor: pointer;
        &:hover {
            color: #ffda23;
        }
    }
`;