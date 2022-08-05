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
// alert(Array.isArray(pessoa));
// Funcoes protas do java script
// Metodo Join
// ele troca o separador do nosso array matrizes


// const lista1 =["Arroz","Feijão", "Macarrão","Leite"]; 
// const lista2=["Refrigerante", "Suco", "tomate","Pizza"]


// como adicionar e remover itens da nossa matriz
// pop remove o ultimo item da matriz
// pessoa.pop()
// Para adicionar um item a nossa lista utilizamos o push
// pessoa.push("Casado")
// Para remover o primeiro item da nossa matriz utlilizamos o metodo
// shift.
// pessoa.shift()
// para adicionar um primeiro item a nossa matriz utlizamos o unshift
// pessoa.unshift("Estudando")
// outro metodo de estar apagando uma posicao seria o delete
// Nao e muito bom usar o delete por que senao ficara undefined
// delete pessoa[0];
// Metodo para adicionar multiplos valores na posicao que desejamos
// usamos o splice 1 e a posicao que voce quer adicionar,0
// 0 e que voce nao quer deletar nenhum e depois colocar os 
// que serão adicionados
// pessoa.splice(1,0,"Item adicionado 1","Item adicionado 2");
// document.getElementById("teste").innerHTML = pessoa.join(" - ");
// Abaixo sera como junta ou concatenar varias matrizes
// const superLista = lista1.concat(lista2);

// const lista1 =["Arroz","Feijão", "Macarrão","Leite"]; 
// const lista2=["Refrigerante", "Suco", "tomate","Pizza"]
// const lista3=["Salgadinho", "banana", "Açucar","Queijo"]

// const superLista = lista1.concat(lista2,lista3);
// document.getElementById("teste").innerHTML = superLista;

// console.log(superLista);
// Fatiar uma matriz pegar parte especificas usa-se o slice
const jogadores=[
    "Biro Biro", 
    "Ribamar", 
    "Pelé", 
    "Maradona",
    "Neymar",
    "Cristiano Ronaldo",
    "Vampeta",
    "Leonardo"
]
// const craques=jogadores.slice(2,6);
// Pelé,Maradona,Neymar,Cristiano Ronaldo


// Para mostrar em order alfabetica usar o metodo sort
// Para fazer ao contrario faz o primeiro sort e depois
// faz jogadores.reverse();
// jogadores.sort();
// jogadores.reverse();


// Corre o risco de no meio disso tudo voce ter uma matriz numerica
const numeros =[40,100,1,5,25,10];
// numeros.sort(); SO ordenacao em ordem alfabetica
// Para ficar certo na parte numerica passar uma funcao assim
// isso abaixo para fazer a ordenação numérica correta
// e se quiser o inverso e so colocar no return b-a
// numeros.sort(function(a,b){return a-b});

// Para conseguirmos pegar o maior numero dentro de uma matriz
// Utilizamos assim como abaixo :
// document.getElementById("teste").innerHTML = maiorNumero(numeros);

// function maiorNumero(array){
//     return Math.max.apply(null, array);
// }


// para pegar o menor numero faremos como abaixo 
// document.getElementById("teste").innerHTML = menorNumero(numeros);

// function menorNumero(array){
//     return Math.min.apply(null, array);
// }

//  Se quisermos filtrar por exemplos numeros maiores que 20.
// const maior20 = numeros.filter(filtragem);
// function filtragem(value, index, array){
//     return value > 20;
// }
// document.getElementById("teste").innerHTML = maior20;



