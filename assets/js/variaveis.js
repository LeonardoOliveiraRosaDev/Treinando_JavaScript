// Variáveis em JavaScript que é muito importante 
/* 

Armazenar valores

temos 3 tipos em JavaScript
Serve para armazenar informacoes que apartir delas poderemos
usar para varias coisas.
No java script 

var a = 2;
var b = 3;
var c = a+b;
alert(c)

Essa forma nao seria tao organizada.
a forma mais organizada seria assim !

// Declaração de variáveis
var a,b,c;

// Atribuição de Valores
a = 2; 
b = 3;
c = a+b;
alert(c)


- var
Ela pode ser usada em qualquer parte do nosso codigo 
exemplo 

var a = 2;
 
e depois mais para baixo ele colocar

 var a =5

ele vai pegar o ultimo valor que foi recebido , valor reatribuido !

// Exemplo

var x = 10; // aqui fora e 10
// Escopo
{
    var x = 2; // aqui dentro e 2
}

Ela é redeclarada


- let

O uso do let torna a variável unica, ela nao pode ser redeclarada
exemplo

let pessoa = "Leonardo"
se colocasse mais abaixo de novo
let pessoa = "Oliveira"

da erra de sintaxe

diferente do var que altera para a ultima que foi declarada
ela pode ser redeclarada no var


- const

O const a variavel e constante sempre a mesma !
Uma variavel que nunca vai mudar
ela é mais restrita, ela nao mudara em lugar nenhuma,
ela sempre sera a mesma !

Usamos quando precisamos declarar uma variavel que sempre tera
aquele valor especifico , que nao ira mudar nunca !


*/

// var pote = "Bombom"
// alert(pote)

var nome, sobrenome, nomeCompleto, idade;


nome = "Leonardo";
sobrenome = "Oliveira Rosa"
idade = 41;
nomeCompleto = nome + " " + sobrenome;
pessoa = "O" +" "+ nomeCompleto + " " + "tem " + " " + idade + " " + "anos!"

document.getElementById("texto").innerHTML = pessoa;

// Declarar sempre numeros separados de string para na hora
// da concatenacao nao dar confusão

