import React from "react";
import {Pie} from 'react-chartjs-2'

const GraficoComparacaoDuracao = ({dadosPeriodo}) => {

    const state = {
        labels: ['30 dias', '15 dias'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: [
                    '#536dfe',
                    '#e41a1c',

                ],
                hoverBackgroundColor: [
                    '#2849fe',
                    '#c21618',

                ],
                data: dadosPeriodo
            }
        ]
    }

    return (
        <Pie
            data={state}
            options={{
                title: {
                    display: true,
                    text: 'Duração das férias',
                    fontSize: 20
                },
                legend: {
                    display: true,
                    position: 'top'
                },
                maintainAspectRatio: false

            }}
        />

    )
    
}
export default GraficoComparacaoDuracao;