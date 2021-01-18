import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction:row;
`;

export const Content = styled.div`
    display:flex;
    flex: 1;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    padding-bottom:25px;

    h1 {
        font-size: 50px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #75757A;
        margin: 20px 0 50px 0;
    }
`;