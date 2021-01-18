import React, {useState, useEffect, useCallback} from 'react';
import {TextField} from '@material-ui/core';

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import {Content, Button, Row} from "./style";
import generatePDF from "../funcaoGerar";
import api from '../../../services/api';

import objetos from '../../../json/objetos.json'

const OpcoesRelatorios = () => {

    const[tickets, setTickets] = useState([]);
    const [mes, setMes] = useState(new Date().getMonth()+1);
    const [ano, setAno] = useState(new Date().getFullYear());

    const meses = Array.from(Array(12), (_, i) => i+1)
    const [lista] = useState(objetos);
    
    const getAllTickets = useCallback(async () => {
      try {
        const response = await api.get(`ferias/${mes}/${ano}`);
        setTickets(response.data);
      } catch (err) {
        console.log("error");
      }
    },[mes, ano]);

    useEffect(() => {
      getAllTickets();
    },[getAllTickets]);

  return (
    <Content>
      <h3>Gerar no período de: </h3>
          <Row>
            <TextField
              style={{width:"30%", margin:"0 1vw"}}
              id="outlined-number"
              select
              label="Mes"
              InputLabelProps={{
                  shrink: true,
              }}
              SelectProps={{
                  native: true,
              }}
              variant="outlined"
              defaultValue={new Date().getMonth()}
              onChange = {e => setMes(e.target.value)}
              >
              {meses.map(l => (
                <option key={l}>{l}</option>
              ))}
            </TextField> 

            <TextField
              style={{width:"30%", margin:"0 1vw"}}
              id="outlined"
              select
              label="Ano"
              InputLabelProps={{
                  shrink: true,
              }}
              SelectProps={{
                  native: true,
              }}
              variant="outlined"
              defaultValue={new Date().getFullYear()}
              onChange = {e => setAno(e.target.value)}
              >
              {lista.anos.map(l => (
                <option key={l.id}>{l.ano}</option>
              ))}
            </TextField> 
          </Row>

        <Button style={{backgroundColor:"#c74c4a"}} onClick={() => generatePDF(tickets)}>Gerar PDF <PictureAsPdfIcon fontSize = 'small'/></Button>
    </Content>
  );
}
export default OpcoesRelatorios;
