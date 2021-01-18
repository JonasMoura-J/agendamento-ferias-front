import React, { useState } from "react";
import Drawer from "../../components/sideBar";
import {Content, Container} from "./style";
import TabelaFerias from "../../components/registroFerias/tabelaFerias";
import Input from "../../components/registroFerias/inputsTabelaRegistroFerias";

const FeriasAtivas = () => {


  const[registroFerias, setRegistroFerias] = useState();

  const getFerias = (ferias) => {
    return setRegistroFerias(ferias);
  }
  return (
    <Container>
      <Drawer />
        <Content>
          <h1>Buscar registro de férias</h1>
          <Input getFerias={getFerias}/>
          <TabelaFerias registroFerias = {registroFerias}/>
        </Content>
      </Container>
 
  );
}

export default FeriasAtivas;