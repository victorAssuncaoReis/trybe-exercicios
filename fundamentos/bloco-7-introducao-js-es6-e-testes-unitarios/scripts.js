const objeto = {
    nome: 'victor',
    idade: 26,
    estuda: 'Trybe',
};
let teste = (par1, par2, par3) => {
    par1[par2] = par3
    return console.log(par1);
}
teste(objeto, 'lastName', 'Reis');