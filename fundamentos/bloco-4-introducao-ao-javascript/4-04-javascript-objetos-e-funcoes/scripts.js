
function array(numeros) {
    let indexMaior = 0;
    for (let index in numeros) {
        if (numeros[indexMaior] > numeros[index]) {
            indexMaior = index;
        } 
    }
    return indexMaior;
}
console.log(array([2, 4, 6, 7, 10, 0, -3]));

