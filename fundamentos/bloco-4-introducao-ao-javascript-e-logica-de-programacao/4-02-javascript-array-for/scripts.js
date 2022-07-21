let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odds = 0;

for (index = 0; index < numbers.length; index +=1) {
     if (numbers[index] % 2 !== 0) {
        odds +=1;
    }
}

if (odds > 1) {
    console.log(odds);
} else {
    console.log("Nenhum valor ímpar encontrado");
}
   

