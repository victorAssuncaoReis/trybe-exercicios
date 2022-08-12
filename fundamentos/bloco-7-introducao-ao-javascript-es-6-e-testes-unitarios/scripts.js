/* let cliques = 0;
let botao = document.getElementById('botao');
let contador = document.getElementById('contador');

const funcao = () => {
    cliques += 1;
    contador.innerHTML = cliques;
}

botao.addEventListener('click', funcao); */
let cliques = 0
botao.addEventListener('click', () => contador.innerHTML = cliques +=1);

