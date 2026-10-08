// Tabela de classificação do IMC usada pela Organização Mundial da Saúde (OMS).
// "ate" é o limite superior (exclusivo) de cada faixa.
export const CLASSIFICACOES = [
  { id: 'abaixo', nome: 'Abaixo do peso', faixa: 'Menor que 18,5', ate: 18.5 },
  { id: 'normal', nome: 'Peso normal', faixa: '18,5 a 24,9', ate: 25 },
  { id: 'sobrepeso', nome: 'Sobrepeso', faixa: '25 a 29,9', ate: 30 },
  { id: 'obesidade-1', nome: 'Obesidade grau I', faixa: '30 a 34,9', ate: 35 },
  { id: 'obesidade-2', nome: 'Obesidade grau II', faixa: '35 a 39,9', ate: 40 },
  { id: 'obesidade-3', nome: 'Obesidade grau III', faixa: '40 ou mais', ate: Infinity }
]

// funções puras: mesma entrada, mesmo resultado, sem mexer em nada fora delas

// altura em centímetros, peso em quilos; arredonda para 1 casa, como na tabela,
// para o número exibido e a linha destacada sempre baterem (ex.: 24,96 vira 25,0)
export function calcularImc(alturaCm, pesoKg) {
  const alturaM = alturaCm / 100
  const imc = pesoKg / (alturaM * alturaM)
  return Math.round(imc * 10) / 10
}

export function classificarImc(imc) {
  return CLASSIFICACOES.find((classificacao) => imc < classificacao.ate)
}
