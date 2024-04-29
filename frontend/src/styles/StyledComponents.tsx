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
`;
export const NavButton = styled.button`
    font-size: 1rem;
    font-weight: bold;
    padding: 0.8rem;
    &:hover {
        background: ${(props) => props.theme.colors.primary};
        border-radius: 1rem;
    }
`

export const Description = styled.div`
    background: #faf7ed;
    padding: 1.4rem;
    margin: 0 0.8rem 1rem 0.8rem;
    color: #525252;
    font-size: 0.8rem;
    border-radius: 0.8rem;
    display: flex;
`;

export const FixedButton = styled.button`
    z-index: 100;
    width: 100%;
    position : fixed;
    bottom : 0;
    padding: 15px;
    background: ${(props) => props.theme.colors.primary};
    color: black;
    font-size: 1rem;
    font-weight: 600;
`;

export const WrapperAlignCenter = styled.div`
    display: flex;
    align-items: center;
`;
export const Wrapper = styled.div`
    display: flex;
`;

export const StyledBtn = styled.button`
    padding: 0.4rem;
    margin: 0 0.3rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    white-space: nowrap;
    background: ${(props) => props.theme.colors.primary};
    border: 2px solid white;
    &:focus {
        border: 2px solid black ;
    }
    &:hover {
      background: black;
      color: white
    }
`;

export const StyledInput = styled.input`
    border: none;
    width: 100%;
    max-width: 200px;
    font-size: 0.9rem;
    border: 2px solid ${(props) => props.theme.colors.primary};
    padding: 0.2rem;
`;