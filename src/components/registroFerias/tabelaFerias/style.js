import styled from 'styled-components'

export const Container = styled.div`
    button {
        font-family:'Roboto';
        color: white;
        background: #75757A;
        border: 0;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        margin: 0 5px;
        transition: .2s;

        &:hover {
            background: #f1592a;
            color: white;
            border: 0;
            outline: none;
        }
    }

    .Toastify__close-button {
        background-color: rgba(255, 255, 255, 0);
        opacity: 1;

        &:hover {
            background-color: rgba(255, 255, 255, 0);
        }   
    }

`;

export const InputUpdate = styled.input`
    border: 0;
    outline: none;
    padding: 7px;
    margin: 5px auto;
    width: 90%;

    &:hover {
        border-bottom: 1px solid #f1592a;

    }

    &:focus {
        border-bottom: 1px solid #f1592a;
        outline: none;
    }
`
;

export const InputCadastro = styled.input `
    border: 0;
    outline: none;
    padding: 7px;
    margin: 5px 3px;
    width: 90%;

    &:hover {
        border-bottom: 1px solid #f1592a;
    }

    &:focus {
        border-bottom: 1px solid #f1592a;
        outline: none;
    }

`;

export const Button = styled.button`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    background-color:#4b5c6b;
    cursor: pointer;
    border: 0;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    transition: .1s;    
    &:hover {
        opacity: .8;
    }
`;

export const Content = styled.div`
    width: 45vw;
    display: flex;
    flex:1;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    margin: 30px 0 50px 0;
`;