import React from 'react';
import logoAzul from '../../assets/imagens/logoAzul.png'
import { Content, Container } from './style';
import { useHistory } from 'react-router-dom'

const NotFound = () => {
    const history = useHistory();

    return(
        <Container>
            <Content>
                <img src={logoAzul} style={{cursor: 'pointer'}} 
                    onClick={() => history.push('/')} alt='Logo da Alterdata'>
                </img>
                <p><b>404</b> Isso é um erro!</p>
                <p>O caminho da URL digitado não existe!</p>
            </Content>
        </Container>
    )
}
export default NotFound;