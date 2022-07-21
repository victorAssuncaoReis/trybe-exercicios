let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index +=1) {
    sum += numbers[index];
}
console.log(sum/numbers.length);

if (sum/numbers.length >= 20) {
    console.log("Valor maior do que 20");
} else {
    console.log("Valor menor do que 20");
}


  

