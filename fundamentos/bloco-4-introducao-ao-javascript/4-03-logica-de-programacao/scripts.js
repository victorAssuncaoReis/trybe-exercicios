let array = ['java', 'javascript', 'python', 'html', 'css'];

array.sort((a,b) => a.length - b.length);

console.log(array[array.length - 1]);

console.log(array[0]);