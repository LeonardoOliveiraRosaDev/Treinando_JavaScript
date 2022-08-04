/* Objetos

Objetos são basicamente variáveis com muitos valores dentro

Ex: const carro = {marca:"ford", modelo:"ka", ano:"2015"}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um método é uma função
colocadas dentro de uma propriedade.


*/

//let carro = "ford"; // variavel simples um carro tem muito mais propriedades


// Nesse caso propriedades sao marca , modelo, ano , placa.
// em cada propriedade tem o seu valor
// const variavel que sera sempre a mesma nao muda!
// geralmente usa uma const para criar um objeto
// de uma propriedade para outra separa por ,
const carro = {
    marca:"ford", 
    modelo:"ka", 
    ano: 2015, 
    placa:"ABC-1234",
    buzina: function (){
        alert('Biiiiiiiiiii');
    },
    completo: function() {
        return "A marca é " +this.marca+" e o modelo é: "+this.modelo;
        // o this quer dizer esta função !
    }
};

// Método é uma função colocada dentro de um propriedade.

// console.log(carro.placa);
// console.log(carro["marca"]);

// quando queremos que um metodo seja acionado

// carro.buzina()
console.log(carro.completo())