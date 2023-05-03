const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Testa se o retorno da função é um array', () => {
    expect(Array.isArray(productDetails())).toBeTruthy();
  });

  it('Testa se o array retornado pela função contém dois itens dentro', () => {
    expect(productDetails().length).toBe(2)
  });

  it('Testa se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object');expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object');
  });

  it('Testa se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toEqual(productDetails('Alcool gel', 'Máscara')[1])
  });

  it('Teste se os dois productIds terminam com 123', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId.includes('123')).toBeTruthy();
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId.includes('123')).toBeTruthy();
  })
});

// ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.