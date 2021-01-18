import React from "react";
import {Content} from './style'

const GraficoFeriasAtivas = ({listaAtivos}) => {

    return(
        <Content>
            <h2>Férias Ativas neste mês</h2>
            <h3>{listaAtivos.length}</h3>
        </Content>
    )
}
export default GraficoFeriasAtivas;