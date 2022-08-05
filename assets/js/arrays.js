/* ARRAYS (MATRIZES)

Os arrays JavaScript são usados para armazenar vários valores
em uma única variável. Diferente dos objetos, que funcionam com 
propriedades ou "nomes" que você dá para os intens dentro dele, os
arrays não possuem propriedades. O item dentro dele é encontrado pela
posição.

Imagina um array como uma lista de itens, com controle, por ordem de
posição dentro dele.

Ex: const lista ["arroz", "feijão","macarrão","leite"];

A lista [0] (lista na posição 0) vai conter o valor "arroz".
A lista [1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante.

*/


//  Essa forma a baixo nao é viavel!
var item1 = "arroz";
var item2 = "feijao";
var item3 = "macarrao";
var item4 = "leite";

// Com a matriz fica muito mais facil apenas passando o indice
//  Os indices ou posicoes sempre começam com 0
// Isso chama arrya literal

// Primeira forma de criar um array e mais utilizada

//    indices       [0]      [1]       [2]       [3]
// const lista = ["arroz", "feijão","macarrão","leite"];

// Segunda forma de criar um array!

// const lista = [];
// lista[0] = "arroz";
// lista[1] = "feijão";
// lista[2] = "macarrão";
// lista[3] = "leite";

// Terceira forma de criar um array

// const lista = new Array("arroz","feijão","macarrão","leite");

// Tambem podemos alterar um item do array
// lista[0]= "Ovo"

// let x = lista[0];
// console.log(x)

// para poder ver todos os itens de uma matriz é só fazer assim !
// console.log(lista)

// const pessoa =["Leonardo","Oliveira", 41]; //Array
// const pessoaa = {nome:"Leonardo", sobrenome:"Oliveira", idade: 41};//Objeto

// pessoaa.nome;
// pessoa[0];


const pessoa =["Leonardo","Oliveira", 41,"estudante"]; 
// alert(pessoa.length); // Quantos tem dentro do meu array 3

// let ver = pessoa[0];
// console.log(ver);

// esse codigo nos mostra o ultimo item do nosso array
// alert(pessoa[pessoa.length -1])

// Como acrescentar mais um item dentro da nossa matriz usa o push ou o 
//outro , melhor usar o push
// pessoa.push("Brasileiro");
// pessoa[pessoa.length] ="Casado"
// console.log(pessoa)

// Como saber se uma variável é uma matriz ou não é (ARRAY)
alert(Array.isArray(pessoa));