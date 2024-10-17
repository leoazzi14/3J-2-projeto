const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarDadosGlobais(){
    const res = await fetch(url);
    const secao = document.querySelector('.graficos-container')
    const dados = await res.json();
    const totalPessoasMundo = dados.total_Pessoas_Mundo
    const totalPessoasConectadas = dados.total_Pessoas_Conectadas
    const tempoMedio = dados.tempo_medio
    console.log(dados);
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-texto');
    paragrafo.innerHTML = `Voce sabia que o mundo tem ${totalPessoasMundo}
    de habitantes e destes ${totalPessoasConectadas} estao conectadas a alguma rede social ficam em 
    media ${tempoMedio} conectadas.`
    secao.appendChild(paragrafo)
}

visualizarDadosGlobais();