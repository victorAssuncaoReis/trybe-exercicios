const custoProduto = 100;

const valorDeVenda = 300;

const custoImposto = 120;

const lucro = valorDeVenda - custoImposto;

if (lucro > 0) {
    console.log(lucro * 1000)
} else {
    console.log("Erro, valor menor do que 0")
}