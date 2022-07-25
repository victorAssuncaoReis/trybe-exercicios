function verificaPalavra(word, ending) {
    let inversoPalavra = word.split("").reverse().join("");
    let inversoUltimaPalavra = ending.split("").reverse().join("");
    let resultado;
    for (let index = 0; index < inversoUltimaPalavra.length; index += 1) {
        if (inversoPalavra[index] !== inversoUltimaPalavra[index]) {
        resultado = false;
        break
        } else {
            resultado = true;
        } 
    }
    return resultado;
}
 

console.log(verificaPalavra("Trybe" , "be"));