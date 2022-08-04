/*

Operadores em JavaScript

-> Os operadores JavaScript são usados para atribuir valores, comparar
valores, executar operações aritiméticas e muito mais.

São os sinais que usamos: + - * / = ++ -- += -= && || etc...

São Separados em 6 "Categorias":

1) Operadores Ariméticos (matemáticos)
2) Operadores de Atribuição
3) Operadores de Sequência -> alert("O valor1 ficou: " + total);
4) Operadores de Comparação
5) Operadores Condicional (Ternário)
6) Operadores Lógicos

*/

// Operadores aritiméticos + - * / (mais, menos, vezes e divisão)
// var valor1, valor2, total;
valor1 = 5;
valor2 = 2;
total=valor1+valor2
// alert(total);

// var valor1, valor2, total;
// valor1 = 5; ++ encremento e --  decremento
// valor2 = 2;
// total=--valor1
// alert("O valor1 ficou: " + total);

// Operadores de atribuicao 
// var valor1, valor2, total;
valor1 = 5; // o sinal de igual 
valor2 = 2;
// podendo ter nesse mesmo caso no atalho += -= *= /=
// valor1 = valor1 + valor2
valor1 += valor2 //esse mais igual fica igual o de cima, seria um atalho
 
//Operador de sequencia concatenação 

//  valor1 = "Leonardo "
//  valor2 ="Oliveira"

//  total = valor1 + valor2
// alert(total)


//4) Operadores de Comparação
// Sempre respondem para nos se e verdadeiro ou falso

var valor1, valor2, total;
valor1 = 8;
valor2 = 12;
// == verifica se o valor é igual e o === ele verifica se o valor e igual e o
// tipo se é igual tb
// != se eles sao diferentes , e tb so pegaria pelo valor
// !== se ele sao diferentes , e verificar valor e tipo
//  temos valor1 < 4 ou valor1 > 4 temos tb o >= <=


//5) Operadores Condicional (Ternário)
//  var idade, eleitor;
//  idade = 15;
//  eleitor = (idade<18) ? "Não, eleitor" : "Sim, eleitor";
//  alert('A resposta é : '+ eleitor +  ' a idade dele é: '  + idade);

//6) Operadores Lógicos

//  var idade, eleitor, resultado;
//  idade = 20;
//  eleitor = (idade<18) ? "Não, eleitor" : "Sim, eleitor";
// // || ou  uma condicao ou outra, idade >60 && (e) < 70)
//  resultado = (idade === 60 || idade === 70); //true //false
// alert(resultado);

var idade, eleitor, resultado;
idade = 71;
eleitor = (idade<18) ? "Não, eleitor" : "Sim, eleitor";
// || ou  uma condicao ou outra, idade >60 && (e) < 70)
resultado = ! (idade === 60); //true //false
alert(resultado);