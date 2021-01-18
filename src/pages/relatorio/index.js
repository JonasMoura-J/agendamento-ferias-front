import React from "react";
import OpcoesRelatorio from "../../components/relatorio/opcoesRelatorio";
import Drawer from "../../components/sideBar/Drawer";
import {Content, Container} from "./style";

const Relatorio = () => {
    return(
        <Container>
            <Drawer />
            <Content>
                <h1>Gerar relatório</h1>
                <OpcoesRelatorio/>

            </Content>
      </Container>
    );
}
export default Relatorio;