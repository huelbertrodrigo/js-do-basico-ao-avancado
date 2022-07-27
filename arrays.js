let num = [18, 20, 16]
let str = ['Pedro', 'João', 'Mane']
let bol = [true, false]
let misturado = [18, 'Pedro', true]

console.log(num)
console.log(str)
console.log(bol)
console.log(misturado)

console.log(
  `${str[1].toUpperCase()} tem ${num[1]} anos e é do sexo ${
    bol[bol.length - 1] ? 'feminino' : 'masculino'
  }`
)

console.log('\n* for')
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i <= numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    console.log(`Número par ${numeros[i]}`)
  }
}

console.log('\n* push e pop mexe no final do array')
let pessoas = ['João', 'Maria', 'José']
console.log(pessoas)
let pessoaRemovida = pessoas.pop()
console.log('Removi o', pessoaRemovida)
console.log(pessoas)
pessoas.push('Tereza')
console.log(pessoas)

console.log('\n* shift e unshift mexe no comeco do array')
let carros = ['BMW', 'Ford', 'Fiat']
console.log(carros)
let carroRemovida = carros.shift()
console.log('Removi o', carroRemovida)
console.log(carros)
carros.unshift('Honda')
console.log(carros)

console.log('\n* indexOf e lastIndexOf')
let numsIndex = [1, 3, 5, 7, 3]
console.log(numsIndex.indexOf(3))
console.log(numsIndex.lastIndexOf(3))

console.log('\n* slice')
let numsSlice = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numsSlice.slice(2, 4))
console.log(numsSlice.slice(2))
console.log(numsSlice.slice(-2))
console.log(numsSlice.slice(1, -4))

console.log('\n* forEach')
let nomes = ['Matheus', 'João', 'Maria', 'José']
nomes.forEach((nome) => {
  console.log(nome)
})

console.log('\n* includes')
let racas = ['Box', 'Pastor', 'Shitzu', 'Pug']
console.log(racas.includes('Pug'))

console.log('\n* reverse')
let numsReverse = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numsReverse.reverse())

console.log('\n* destructuring')
let nums = [1, 3, 5, 7, 9]
let [num1, num2, num3, num4, num5] = nums
console.log(num5, num4, num3, num3, num1)
