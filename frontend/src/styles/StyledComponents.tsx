import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    min-height: 85vh;
    padding: 0 1rem;
    padding-bottom: 100px;
`;

export const FixedButton = styled.button`
width: 100%;
position: fixed;
bottom: 0;
padding: 15px;
background: #ffda23;
color: black;
font-size: 1rem;
font-weight: 600;
`;

export const RoundButton = styled.button`
    border-radius: 2em;
    padding: 1.2em;
    font-weight: bold;
    margin: 10px 0;
`;