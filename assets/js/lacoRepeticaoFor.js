/*Laço de Repetição For

Laços oferecem um jeito fácil e rápido de executar
uma ação repetidas vezes


ponto inicial condicao
comeca no i=0
condicao i<10001
acrecenta +1 i++

até chegar no 10000
*/

// for (let i=0; i<10001; i++) {
//     document.getElementById("teste").innerHTML += i +" , ";
// }

var ano = new Date().getFullYear();

for (let i= ano; i>1900; i--){
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+" </option>";
}

const carros = ["Gol","Fusca","Brasilia","Delrey","Chevette"];

let p = document.getElementById("teste");
var tamanho = carros.length;

for (let i=0; i<tamanho; i++){
    p.innerHTML +=carros[i] + " - ";
}

