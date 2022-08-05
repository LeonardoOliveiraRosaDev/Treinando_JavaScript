/* EVENTOS MUITO IMPORTANTE

Eventos são ações disparadas oeka interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e
dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

onclik -> Disparado quando recebe um click.
ondblclick -> Disparado quando clique duplo.
onmouseover -> Disparado quando o mouse esta sobre.
onmouseout -> Disparado quando o mouse e movido para fora do elemento
onmousemove -> Disparado quando o mouse é movido no elemento.
onmousedown -> Disparado quando o clique do botão foi pressionado.
onmouseup -> Disparado quando o clique é liberado.
onfocus -> Disparado quando o elemento recebe o fóco. Válido para input,

onchange -> Disparado qyabdi existe uma mudança no conteúdo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla e pressionada.
onkeypress -> Disparada quando uma tecla é pressionada e solta.
onkeyup -> Disparada quando uma tecla é solta sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada. "body".
onresize -> Disparada quando há um redimencionamento da janela.


*/
// Evento de Click
// function eventoClick() {
//     // alert('Acionou um evento de Click');
//     document.body.style.backgroundColor = "yellow";
// }

// Evendo de doubleClick
function evento() {
    // alert('Evento de click Duplo');
    document.body.style.backgroundColor = "red";
}

//Evento onmouseover
function viraVermelho() {
   let div = document.getElementById("teste");
   div.style.backgroundColor ="red";
}
//Evento onmouseout
function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor ="blue";
}

// function adicionaTexto(){
//     let p = document.getElementById("texto");
//     p.append('o mouse moveu <br>'); // esse append tem função de adicionar
// }

// function limpaTexto(){
//     document.getElementById("campoTexto").value = "";
// }

function mudou(){
    console.log('mudou')
}

function teclaPressionada(){
   let input = document.getElementById("campoTexto").value;
    console.log(input);
}