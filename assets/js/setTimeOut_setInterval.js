/*SetTimeOut e SetInterval JAVASCRIPT
EVENTO DE TEMPO COM JAVASCRIPT

Os Eventos de tempo permitem a execução do código
em intervalos de tempo especificados. Esses intervalos
de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com JavaScript são:

setTimeout(function,tempo em milisegundos)
-> executa uma função, depois de esperar um número
especificado de milisegundos.

setInterval (function, milisegundos)
-> É o mesmo que setTimeout(), mas repete a execução
da função continuamente.


*/

function ativarContagem(){
    // document.getElementById("tempo").innerHTML ="Começou a contar";
    // Ativa a Função apenas uma vez quando der o tempo especificado.
    // tempo = setTimeout(function(){
        // document.getElementById("tempo").innerHTML ="Executou o setTimeout";
    //     document.body.style.backgroundColor = "gray";
    //     document.getElementById("tempo").innerHTML ="Seu Fundo mudou para cinza";
    //  }, 5000);

   tempo = setInterval(function(){
        let p = document.getElementById('tempo');
        var cronometro = document.getElementById("tempo").innerHTML;
        // parseInt transformar texto em numero para somar
        var soma = parseInt(cronometro) - 1;

        if (soma === 0){
            p.innerHTML = "Tempo Esgotado";
            p.style.color = "red"
            pararContagem();
        }else{
            p.innerHTML = soma;
        }
        // document.getElementById('tempo').innerHTML = soma;
        document.getElementById("resposta").innerHTML = "Iniciou o Cronometro!"
    },1000)


}

function pararContagem() {
    // Clear função de parar a contagem
    // clearTimeout(tempo);
    // document.getElementById("tempo").innerHTML = "NÃO AGUENTOU ESPERAR..";
    let r = document.getElementById("resposta");
    clearInterval(tempo);
    r.innerHTML = "Pausou o Cronometro"


}


