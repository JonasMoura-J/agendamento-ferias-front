import styled from "styled-components";

export const Content = styled.div`
    width: 45vw;
    display: flex;
    flex:1;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`;

export const Button = styled.button`
    margin-top: 1vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    background-color:#4b5c6b;
    border: 0;
    padding: 13px;
    border-radius: 5px;
    outline: none;
    transition: .1s;   
    cursor: pointer; 
    &:hover {
        opacity: .8;
    }
`;