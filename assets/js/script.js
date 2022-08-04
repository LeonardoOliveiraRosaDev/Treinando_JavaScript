

// 1º Saida em Java Script
// Pegando pelo elemento ID do HTML para inserir um texto

document.getElementById("texto").innerHTML = "Meu Primeiro texto em <b>JavaScript</b>";

// Segunda forma dentro do Arquivo HTML
// colocamos um document.write('Teste')
// Basicamente a mesma Função que o innerHTML
// Porem ele é mais usado para proposito de testes
// Ele tambem aceita ja funcoes document.write(5 + 5);
// Enão document.write e uma segunda maneira de saida de dados !

// Terceira maneira atraves do alerta

// alert(10+5);
// alert("Funcionando")

// 4º maneira é usando o console.log
// Ele é mais silencioso que o Alert rss
console.log('Oi isso e um console.log')

/*

Então os 4 tipos de saidas no html seria
- document.getElementId();
- document.write(); que serve para teste e dentro no html
- alert('') que gera uma caixinha ao carregar a pagina
- console.log('') que é mais silencioso que o alert e aparaceno no
    modo desenvolvedor no inspecionar da pagina na área de console

Usamos bastante o console.log e o alert , quando queremos ter uma 
interação com a nossa página usamos o innerHTML , e para alguns
testes usamos o document.write()

4 formas de exibir uma informacao para nossos usuários através do java
Script.

*/