/* CLASSES
Em 2015 foi introduzido no JavaScript as Classes. AS Classes
são um conceito antigo em programação e várias linguagens
utilizam elas. Mas no JavaScript isso é relativamente
novo, por isso mesmo programadores experientes não sabem
muito bem utilizar.

Basicamente, as classe são como fabricas para criar
objetos.
Pode se dizer que são funções especiais para criação
de objetos.

Assim como uma fábrica da vida real precisa de maquinas
para construir os objetos, as Classes no JavaScript usam
um método chamado constructor() para fabricar objetos.
*/
// Classe "Fabrica " sempre tem que ser declarada antes

class Carro {
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + " buzinou: Biiiiiiiiiiiiiii";
    }
}

const uno = new Carro("Fiat", "Uno", 2001);


// const gol = new Carro("Volksvagen","gol", 2013);
// console.log(uno.buzina());
// console.log(gol.buzina());
// console.log(gol)
// gol.ano = 2014;
// console.log(gol);