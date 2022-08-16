const sum = require('./sum.js');

describe('Função de soma', () => {
  test('Teste se a função soma 4 e 5 com resultado 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('Testa se a soma com os parâmetros 0 e 0 tem resultado 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('Testa se a função retorna um erro se os parâmetros conterem uma ou mais strings', () => {
    expect(() => sum(4, '5')).toThrowError();
  });
  test('Testa se o texto do error é o esperado', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});
