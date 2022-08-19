const checagem = (numero, aleatorio) => numero === aleatorio;

const sorteio = (numero, callback) => {
  const aleatorio = Math.round(Math.random() *5);
  return callback(numero, aleatorio) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(sorteio(3, checagem));


