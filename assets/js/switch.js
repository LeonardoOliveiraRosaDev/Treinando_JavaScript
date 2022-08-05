/* Switch

É usado para realizar diferentes ações com base em diferentes condições
no mesmo bloco de verificação. Caso a condição não seja compatível
não será executada e o valor padrão acionado.

*/

// let p = document.getElementById("teste");
// sitaxe do switch
// switch (expressao){
//     case a:
//         // o que acontece
//         break;
//     case b:
//         // o que acontece
//         break;
//     case c:
//         // o que acontece  
//         break;
//     default:
//         // o que acontece
// }

// function verificaCor(){
//     let cor = document.getElementById("cor").value;
//     // CASO O USUARIO DIGITE COM MAIUSCULO 
//     // para nao dar erro
//     cor = cor.toLowerCase();
//     switch (cor){
//     case "azul":
//         // o que acontece
//         document.body.style.backgroundColor = "blue";
//         break;
//     case "vermelho":
//         // o que acontece
//         document.body.style.backgroundColor = "red";
//         break;
//     case "amarelo":
//         // o que acontece 
//         document.body.style.backgroundColor = "yellow";
//         break;
//         case "rosa":
//         // o que acontece 
//         document.body.style.backgroundColor = "pink";
//         break;
//         case "cinza":
//             // o que acontece 
//             document.body.style.backgroundColor = "gray";
//             break;
//     default:
//         // o que acontece
//         let p = document.getElementById("teste");
//         p.innerHTML = "NENHUMA COR DISPONÍVEL PARA: "+ cor;
// }
// }

// function verificaCor(){
//     let p = document.getElementById("teste");
//     let cor = document.getElementById("cor").value;
//     let x = "0";


//     switch (x){
//     case 0:
//         // o que acontece
//         p.innerHTML = "A variável é zero"
//         break;
//     default:
//         // o que acontece
//         p.innerHTML = "Não foi encontrado"
// }
// }


// Pegar dia da Semana 


function diaDaSemana(){
    let p = document.getElementById("teste");
    var dia = new Date().getDay();
    console.log(dia)
 

    switch (dia){
    case 0:
        // o que acontece
        p.innerHTML = "Hoje é Domingo";
        break;
    case 1:
        // o que acontece
        p.innerHTML = "Hoje é Segunda-Feira";
        break;
    case 2:
        // o que acontece 
        p.innerHTML = "Hoje é Terça-Feira";
        break;
        case 3:
        // o que acontece 
        p.innerHTML = "Hoje é Quarta-Feira";
        break;
        case 4:
            // o que acontece 
            p.innerHTML = "Hoje é Quinta-Feira";
            break;
        case 5:
            // o que acontece 
            p.innerHTML =  "Hoje é Sexta-Feira";
            break;
        case 6:
            // o que acontece 
            p.innerHTML = "Hoje é Sabado";
            break;    
    default:
        // o que acontece
        p.innerHTML = "NÃO SEI QUE DIA É...."
}
}