import React, { useState, useEffect } from "react";
import Drawer from "../../components/sideBar/Drawer";
import GraficoFeriasMes from "../../components/graficos/graficoFeriasMes";
import Paper from '@material-ui/core/Paper';
import {Content, Container} from "./style";
import GraficoFeriasAtivas from "../../components/graficos/graficoFeriasAtivas";
import { Grid } from "@material-ui/core";
import GraficoComparacaoDuracao from "../../components/graficos/graficoComparacaoDuracao";
import api from "../../services/api";


const Dashboard = () => {

  const[listaAtivos, setListaAtivos] = useState([]);
  const [dadosPeriodo, setDadosPeriodo] = useState([]);
    
    const GetRegistrosAtivos = async() =>{
        const mesInicio = new Date().getMonth()+1;
        const mesFim = new Date().getMonth()+1;
        const anoAtual = new Date().getFullYear();
        try {
            const response = await api.get(`ferias/${mesInicio}/${mesFim}/${anoAtual}`);
            setListaAtivos(response.data)         
          
        } catch (error) {
        }
    }

    const GetFeriasPorDuracao = async() =>{
      try {
          const response30 = await api.get(`ferias/${30}`);
          const response15 = await api.get(`ferias/${15}`);

          setDadosPeriodo([response30.data.length, response15.data.length])

      } catch (error) {
      console.log("getFerias: ", error);
      }
    }

    useEffect(() => {
      GetRegistrosAtivos();
      GetFeriasPorDuracao();
  }, [])

  return (
    <Container >
      <Drawer />
      <Content>
        <div style={{ display: 'flex', width: '90%', flexWrap: 'wrap', flexDirection: 'row'}}>
            <Grid container spacing={6}>
                <Grid item xs={8}>
                  <Paper style={{
                      marginBottom: 50,
                      padding: 10,
                      flexGrow: 1,
                      flex: 3,
                      minWidth: 200,
                      minHeight: 150,
                  }}>
                    <GraficoFeriasMes/>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper style={{
                        position: 'relative',
                        marginBottom: 10,
                        padding: 20,
                        flex: 1,
                        flexGrow: 1,
                        minWidth: 100,
                        minHeight: 330
                    }}>
                      <GraficoComparacaoDuracao dadosPeriodo={dadosPeriodo}/>
                    </Paper>

                    <Paper style={{
                        position: 'relative',
                        marginBottom: 10,
                        padding: 20,
                        flex: 1,
                        flexGrow: 1,
                        minWidth: 100,
                        minHeight: 100
                    }}>
                      <GraficoFeriasAtivas listaAtivos={listaAtivos}/>
                    </Paper>
                </Grid>
                
            </Grid>
        </div>
      </Content>
    </Container>
  );
};
export default Dashboard;
