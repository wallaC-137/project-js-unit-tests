/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

/**
 * 
 * @param {Primeiro} value Recebe um array
 * @returns retorna a média dos números desse array ou undefined caso tenha algo inválido
 */
const average = (value) => {
  let result = 0;
  // console.log(value.length);

  if (value.length === 0) {
    return;
  }

  for (let i of value) {
    if (typeof i === 'number') {
      result += i;
    } else {
      return;
    }
  }

  const resultFinal = Math.round(result / value.length);
  return resultFinal;
};

module.exports = average;
