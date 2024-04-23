import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    min-height: 85vh;
    padding: 0 1rem;
    padding-bottom: 100px;
`;

export const RoundButton = styled.button`
    border-radius: 2em;
    padding: 1.2em;
    font-weight: bold;
    margin: 10px 0;
`;

// route detail, place dtail, my route write
export const NavBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    button {
        font-size: 1rem;
        font-weight: bold;
        padding: 0.8rem;
        &:hover {
            background: ${(props) => props.theme.colors.primary};
            border-radius: 1rem;
        }
    }
`;

export const Description = styled.div`
    background: #faf7ed;
    padding: 1.4rem;
    margin: 0 0.8rem 1rem 0.8rem;
    color: #525252;
    font-size: 0.8rem;
    border-radius: 0.8rem;
`;

export const FixedButton = styled.button`
    width: 100%;
    position : fixed;
    bottom : 0;
    padding: 15px;
    background: ${(props) => props.theme.colors.primary};
    color: black;
    font-size: 1rem;
    font-weight: 600;
`;

export const Wrapper = styled.div`
    display: flex;
`;