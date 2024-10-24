import { getCSS } from "./comum.js";
import {tickfont} from "./comum.js";

async function quantidadeusuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const resultado = await fetch(url);
    const dados = await resultado.json();
    const nomeredes = Object.keys(dados);
    const quantidadeusuarios = Object.values(dados);


    const infos = [
        {
            x: nomeredes,
            y: quantidadeusuarios,
            type: 'bar', 
            marker: {
                color: getCSS('--cor-primaria')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'Redes com mais usuário no mundo',
            x: 0,
            font:{
                color: getCSS('--cor-primaria'),
                family: getCSS('--fonte'),
                size:30
            }
        }
    }
    const grafico = document.createElement('div');
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico,infos,layout)
} 

quantidadeusuarios()