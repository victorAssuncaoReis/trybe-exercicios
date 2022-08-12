const fatorial = (number) => {
    let resultado = 1
    for (index = 2; index <= number; index += 1) {
        resultado *= index
    }
    return resultado
}
console.log(`Esse é o fatorial ${fatorial(5)}`);
