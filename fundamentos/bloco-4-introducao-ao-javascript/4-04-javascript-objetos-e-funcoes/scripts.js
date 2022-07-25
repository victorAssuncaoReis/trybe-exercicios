function soma(numeros) {
    let total = 0;
   for (index = 0; index <= numeros; index += 1) {
    total = total + index;
   }
   return total;
}

console.log(soma(5));


