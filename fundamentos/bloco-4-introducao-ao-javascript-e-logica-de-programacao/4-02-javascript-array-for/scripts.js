let inicio = 1;
let fim = 25;

let arr = [];

for (let index = inicio; index < fim; index +=1) {

    while(inicio <= fim){
        arr.push(inicio++);
      }
}

let arr2 =[];

for (let index2 = 0; index2 < arr.length; index2 +=1) {
    arr2.push(arr[index2] / 2);
}

console.log(arr2)