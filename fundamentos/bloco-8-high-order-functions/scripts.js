const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna', 'Antedeguemon'];

const hasName = (arr, name) => {
  return arr.some((nomes) => nomes === name);
}

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Antedeguemon'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 19 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((idades) => idades.age >= minimumAge);
}

console.log(verifyAges(people, 18));