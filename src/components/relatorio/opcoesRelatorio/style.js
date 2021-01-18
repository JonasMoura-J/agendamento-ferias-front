import styled from "styled-components";

export const Button = styled.button`
    margin: 10vh 1vw 2vh 1vw;
    align-items:center;
    justify-content:center;
    text-align:center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    border: 0;
    padding: 13px;
    border-radius: 5px;
    outline: none;
    transition: .1s;
    cursor: pointer;
    width: 30vh;   
    &:hover {
        opacity: .8;
    }

`;

export const Content = styled.div`
    width: 50vw;
    display: flex;
    flex:1;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    h3{
        font-size: 1.2rem;
        color:#666666;
        text-align:center
    }
`;

export const Row = styled.div`
    width: 40vw;
    display: flex;
    flex:1;
    align-items:center;
    justify-content:center;
    flex-direction: row;
    h3{
        font-size: 1.2rem;
        color:#666666;
        text-align:center
    }
`;
