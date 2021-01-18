import React,{ useEffect, useState, useCallback} from 'react';

import objetos from '../../../json/objetos.json'
import {Content, Button} from './style.js'

import {TextField, Grid} from "@material-ui/core";

import api from '../../../services/api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputRegistros = ({getFerias}) => {
    const alert = (mensagem, tipo) => {
        toast(
            mensagem,
            {type: tipo}
        );
    }
    const [lista] = useState(objetos);

    const [funcao, setFuncao] = useState("Todas")
    const [mes, setMes] = useState(new Date().getMonth()+1)
    const [ano, setAno] = useState(new Date().getFullYear())

    const getRegistros = useCallback(async () => {
        const semEspacos = funcao.replace(" ","_");
        const funcaoFormatada = semEspacos.toUpperCase();

        try {
            let rota = funcao === 'Todas'? `ferias/${mes}/${ano}`: `ferias/registro/${funcaoFormatada}/${mes}/${ano}`
            const response = await api.get(rota);
            getFerias(response.data);

                if(response.data.length === 0){
                    alert('Não foi encontrado nenhum registro', 'warning')
                }else{
                    alert('Registros resgatados com sucesso!', 'success')
            }
        } catch (error) {
          alert('Falha ao recuperar registros', 'error')
        }
    }, [funcao, mes, ano])

    useEffect (()=>{
        getRegistros()
    },[])

    return(
        
        <Content>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                <TextField
                    style={{width:"100%"}}
                    size="small"
                    id="outlined-search"
                    label= "Função"
                    select
                    InputLabelProps={{
                    shrink: true,
                    }}
                    SelectProps={{
                    native: true,
                    }}
                    variant="outlined"
                    required
                    defaultValue="Todas"
                    onChange = {e => setFuncao(e.target.value)}
                >
                    {lista.funcoes.map(l => (
                        <option key={l.id}>{l.nome}</option>
                    ))}
                </TextField>
                </Grid>

                <Grid item xs={3}>
                <TextField
                    size="small"
                    style={{width:"100%"}}
                    id="outlined-number"
                    label= "Mês"
                    select
                    InputLabelProps={{
                    shrink: true,
                    }}
                    SelectProps={{
                    native: true,
                    }}
                    variant="outlined"
                    required
                    defaultValue={new Date().getMonth()}
                    onChange = {e => setMes(e.target.value)}
                >
                    {lista.meses.map(l => (
                        <option key={l.id}>{l.mes}</option>
                    ))}
                </TextField>
                </Grid>

                <Grid item xs={3}>
                <TextField
                    size="small"
                    style={{width:"100%"}}
                    id="outlined-year"
                    label= "Ano"
                    select
                    InputLabelProps={{
                    shrink: true,
                    }}
                    SelectProps={{
                    native: true,
                    }}
                    variant="outlined"
                    required
                    defaultValue={new Date().getFullYear()}
                    onChange = {e => setAno(e.target.value)}
                >
                    {lista.anos.map(l => (
                        <option key={l.id}>{l.ano}</option>
                    ))}
                </TextField>
                </Grid>

                <Grid item xs={2}>
                    <Button size="small" onClick={() => getRegistros()}>Buscar</Button>
                </Grid>
            </Grid>
            <ToastContainer />
        </Content>
    )
}
export default InputRegistros;