const maiorPalavra = (frase) => {
    let tamanho = 0;
    let resultado = '';
    const array = frase.split(' ');
    for (const index of array) {
        if (index.length > tamanho) {
            tamanho = index.length;
            resultado = index;
        }
    }
    return resultado;
}
console.log(maiorPalavra('Meu amigo é Duuloko'));



