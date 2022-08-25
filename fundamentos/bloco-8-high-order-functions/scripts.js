const sum = (...par) => (par.reduce((acc, curr) => acc + curr));


console.log(sum(4,5,6,5,300));