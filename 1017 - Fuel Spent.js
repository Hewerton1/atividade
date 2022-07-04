var input = require('fs').readFileSync('/dev/stdin', 'utf8');
 
const [tempoGasto, valocidadeMedia] = input.split("\n");

const totalPercorrido = tempoGasto * valocidadeMedia;
const qtdCombustivelGasto = totalPercorrido / 12;

console.log(qtdCombustivelGasto.toFixed(3));