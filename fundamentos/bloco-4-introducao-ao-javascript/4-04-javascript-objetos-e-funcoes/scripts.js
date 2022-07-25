
function array(numeros) {
    let indexMaior = 0;
    for (let index in numeros) {
        if (indexMaior < numeros[index]) {
            indexMaior = numeros[index];
        } 
    }
    return indexMaior;
}
console.log(array([2, 3, 6, 7, 10, 1]));