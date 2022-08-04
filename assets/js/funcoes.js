//Funções em Java Script
// Parte chave do JavaScrip
/*
Uma função JavaScript é um bloco de código projetado para executar uma tarefa 
específica.

É como uma pequena "fabrica" onde você faz uma entrada e ele te dá uma
saida


*/
//função de Soma
function soma(valor1, valor2){
    return valor1 + valor2;
}

// document.getElementById("texto").innerHTML = soma(10,23); // envocando a funcao

// var total = soma(10,23);

// alert(total);




// Função de cotação do dolar
function realParaDolar(real,cotacaoDolar){
    return real * cotacaoDolar;
}



// var valorReal = 7.89
// var cotacao = 5.25
// var total = realParaDolar(valorReal,cotacao);
// alert("o valor em real é R$: " + valorReal + " e o valor em dólar é U$: " + total);

// funcoes podem ser envocadas por botoes ou eventos

function alertaHello() {
    alert("Olá Pessoal !");
}

// alertaHello();  assim esta envocando uma função

function paraCelcius(valorFahrenheit) {
    return (5/9) * (valorFahrenheit - 32);
}

// var x = paraCelcius(77);
// alert("A temperatura é de " +x+ " graus celsius !!");

function minhaFuncao() {
    var x = 2; // variavel local
}