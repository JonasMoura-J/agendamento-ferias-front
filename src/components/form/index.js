import React, {useState} from "react";
import {
  TextField,
  Grid,
} from "@material-ui/core";

import api from '../../services/api';

import {Content, Button} from "./style.js";
import '../../index.css'

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchIcon from "@material-ui/icons/Search";

export default function LayoutTextFields() {

  const[login, setLogin] = useState("");
  const[email, setEmail] = useState("");
  const[dias, setDias] = useState(15);
  const[inicio, setInicio] = useState("");
  const[fim, setFim] = useState("");

  const[dadosColaborador, setDadosColaborador] = useState({})

  const CadastrarFerias = async() =>{
    const params = {
      login: login,
      duracao: dias,
      dataInicio: inicio,
      dataFim: fim
    }

    var partesData = params.dataInicio.split("-");
    var dataInicio = new Date(partesData[0], partesData[1] - 1, partesData[2]);
    var partesData2 = params.dataFim.split("-");
    var dataFim = new Date(partesData2[0], partesData2[1] - 1, partesData2[2]);

    var hoje = new Date();

    if(dataInicio <= hoje){
      alert('Não é possível cadastrar em datas passadas', 'error')
      return
    }

    var partesDataAdmissao = dadosColaborador.dataAdmissao.split("-");
    var dataAdmissao = new Date(partesDataAdmissao[0], partesDataAdmissao[1] - 1, partesDataAdmissao[2]);
    var diferenca = Math.abs(hoje.getTime() - dataAdmissao.getTime());
    var diferencaEmDias = Math.ceil(diferenca / (1000 * 3600 * 24))+1;
    if(diferencaEmDias<360){
      alert('O Colaborador ainda não possui um ano na empresa', 'error')
      return
    }

    let dataAniversario = dadosColaborador.aniversarioDataContratacao.split("-");
    console.log("aqui", parseInt(dataAniversario[0]), hoje.getFullYear)
    if(parseInt(dataAniversario[0]) === hoje.getFullYear()){
      alert('O Colaborador já usufruiu das férias neste ano', 'error')
      return
    }

    var timeDiff = Math.abs(dataFim.getTime() - dataInicio.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))+1;

    if(diffDays !== parseInt(params.duracao)){
      console.log(diffDays, parseInt(params.duracao))
      alert('A duração entre a data de inicio e a data fim não condizem com a duração', 'error')
      return
    }

    try {
      await api.post("ferias", params);
      alert('Férias registrada com sucesso!', 'success')
      
    } catch (error) {
      alert('Não foi possível cadastrar as férias do colaborador', 'error')
    }
  }

  const GetColaborador = async() =>{
    if(login === ""){
      alert("Usuário não encontrado", "error")
      return
    }
    
    try {
      const response = await api.get(`colaborador/${login}`);
      setDadosColaborador(response.data)
      setLogin(response.data.login)
      if(login === ""){
        alert("Usuário não encontrado", "error")
        return
      }

    } catch (error) {
      console.log("getColaborador: ", error);
    } 
  }

  const alert = (mensagem, tipo) => {
    toast(
        mensagem,
        {type: tipo}
    );
  }

  return (
    <Content>
      <Grid container spacing={5}>
        <Grid item xs={6}>
        <TextField
            style={{width:"100%", marginBottom:"50px"}}
            id="input-with-icon-textfield"
            className="medium-input"
            label= "Login do colaborador"
            onChange={e => setLogin(e.target.value)}
          />
        </Grid>

        <Grid item xs={2}>
          <Button style={{fontSize:"1rem"}} onClick={() => GetColaborador()}><SearchIcon /></Button>
        </Grid>

        <Grid item xs={6}>
          <TextField
            style={{width:"100%"}}
            label="Login"
            id="outlined"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            required
            value={dadosColaborador.login}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            style={{width:"100%"}}
            label="Nome"
            id="outlined-margin-none"
            variant="outlined"
            value={dadosColaborador.nome}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            style={{width:"100%"}}
            label="Email"
            id="outlined-email"
            fullWidth
            type = "email"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            required
            value={dadosColaborador.email}
            onChange = {e => setEmail(e.target.value)}
          />
        </Grid>
        
        <Grid item xs={4}>
          <TextField
            style={{width:"100%"}}
            id="outlined-number"
            label= "Duração"
            select
            InputLabelProps={{
              shrink: true,
            }}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            required
            onChange = {e => setDias(e.target.value)}
            key={1}
          >
            <option>15</option>
            <option>30</option>
          </TextField>
        </Grid>

        <Grid item xs={4}>
          <TextField
          style={{width:"100%"}}
          id="outlined-date"
          label="Início das Férias"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
          onChange = {e => setInicio(e.target.value)}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            style={{width:"100%"}}
            id="outlined-date-end"
            label="Fim das Férias"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            required
            onChange = {e => setFim(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Button style={{fontSize:"1rem"}} onClick={CadastrarFerias}>Finalizar</Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </Content>
  );
}
