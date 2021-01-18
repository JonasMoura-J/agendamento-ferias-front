import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction:row;    

`;

export const Content = styled.div`
    display:flex;
    flex: 1;
    align-items:center;
    flex-direction:column;
    padding-top:70px;
    p {
        font-size: 1.5rem;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #75757A;
        margin-top: 60px;
    }
`;