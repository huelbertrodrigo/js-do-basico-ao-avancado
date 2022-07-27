const nome = 'Huelbert'
const sobrenome = 'Rodrigo'
const idade = 33
const homem = true

console.log(
  `Soma de 1 e 2 = ${1 + 2}`,
  `\n Subtração de 2 e 1 = ${2 - 1}`,
  `\n Multiplicação de 2 por 2 = ${2 * 2}`,
  `\n Divisão de 6 por 2 = ${6 / 2}`,
  `\n Resto da divisão de 7 por 2 = ${7 % 2}`
)

console.log(
  typeof 3,
  typeof 'Sistema',
  typeof true,
  typeof Infinity,
  typeof -Infinity,
  typeof NaN
)

console.log(
  'Nome Completo:',
  nome,
  sobrenome,
  '\n Idade:',
  idade,
  homem ? '\n Sexo: Masc.' : '/n Sexo: Feminino'
)

console.log(`${nome} você sabe que 4 x 5 é ${4 * 5}`)

console.log('Meu nome é "Huelbert"')

console.log('salada' + ' de ' + 'frutas', '   ===   ', 'salada', 'de', 'frutas')

console.log(Infinity, -Infinity, NaN)

console.log(3 > 1 && 4 === 4, 3 > 1 || 4 === '4', !true)

console.log(
  33 > 33,
  33 >= 33,
  15 < 33,
  15 <= 33,
  33 == 33,
  33 != 33,
  33 === '33'
)

console.log(null, undefined)

console.log(5 * null, 'dois' * 'tres')
