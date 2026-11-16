//Pega a data atual do sistema
const dataHoje = new Date();

//Formata a data para o padrão 'pt-br' (dia/mes/ano)
const dataFormatada = dataHoje.toLocaleDateString('pt-BR');

//Insere a data formatada dentro do elemento HTML
document.getElementById('data-atual').textContent = dataFormatada;