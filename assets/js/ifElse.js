/* If e Else Se tao coisa acotencer faça tal coisa

*/

// var interruptor = "off"

// if (interruptor =="on"){
//     alert('A Lampada esta Ligada');
// }else {
//     alert('A Lampada esta Desligada');
// }

// Temos tambem uma 2 forma de passar uma segunda
// condicao caso a primeira nao seja o desejavel
// que sera assim como esta abaixo else if

// var hora = new Date().getHours()

// if (hora < 12){
//     alert('Bom dia !');
// }else if (hora <18){
//     alert('Boa Tarde !');
// }else {
//     alert('Boa noite !')
// }

// Geralmente usamos isso para validação de
// Formularios como no exemplo abaixo
//  junto com o html

function verificar(){
    let nome = document.getElementById("nome").value;

    if(nome == "" || nome==null){
        let p = document.getElementById("teste");
        p.innerHTML = "ERRO CAMPO VAZIO";
        p.style.color ="red";
    }else {
        let p = document.getElementById("teste");
        p.innerHTML = "PARABÉNS AGORA ESTA TUDO CERTO";
        p.style.color ="green";
    }
}



