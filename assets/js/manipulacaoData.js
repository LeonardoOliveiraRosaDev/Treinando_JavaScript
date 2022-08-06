/**MANIPULAR DATAS EM JAVASCRIPT 
 
Para trabalhar com datas no JavaScript utilizamos
um objeto especial que se chama Date




*/


// COMANDO BASE PARA PEGAR A DATA
let data = new Date();
// console.log(data)

// PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
console.log(ano);

// PEGAR O MES ATUAL  DE 0 ATE 11 , SENDO 0 JANEIRO 
// 11 DEZEMBRO COMO SE FOSSE UMA MATRIZ
let mes = data.getMonth();
// console.log(mes)

// DESSA FORMA PODEMOS MOSTRAR O MES ESCRITO
const mesesDoAno =[
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito)

// PEGAR DIA DO MES - 1 ATE 31
let diaMes = data.getDate();
console.log(diaMes)

// PEGAR O DIA DA SEMANA 
let semana = data.getDay();
const escritaSemana = [
    "Domingo",
    "Segunda",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sabado"
];
let semanaEscrita = escritaSemana[data.getDay()]
console.log(semanaEscrita);

// PEGAR A HORA - DE 0 ATE 23
let hora = data.getHours();
console.log(hora);

// PEGAR OS MINUTOS - DE 0 ATE 59
let minutos = data.getMinutes();
console.log(minutos);

// PEGAR SEGUNDOS - DE 0 ATE 23
let segundos = data.getSeconds();
console.log(segundos);

// PEGAR OS MILESEGUNDOS - DE 0 ATE 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// PEGAR A DATA NO PADRÃO BRASILEIRO - DIA / MES / ANO
// ('pt-BR',{dateStyle: 'short'}); so a data
// ('pt-BR',{timeStyle: 'short'});
let dataBr = data.toLocaleString('pt-BR');
console.log(dataBr);

// PEGAR VALORES SEPARADOS E DEPOIS JUNTAR
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();


// condicao ternaria ? significa Senao : significa se nao
function addZero(x){ return x<10 ? '0' + x : '' + x; };


let dataPadraoBr = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBr)


// COMO FAZER PARA COMPRAR DATAS MAIOR OU MENOR . EX VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2022, 7, 15);

if(hoje > vencimento){
    console.log("Sua Conta esta Vencida");
}else{
    console.log("Ainda não venceu esta tudo certo !")
}

// DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2022, 11, 31);
var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDias + " dias");