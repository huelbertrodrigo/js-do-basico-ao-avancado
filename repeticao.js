let x = 10
console.log('\n * while')
while (x > 0) {
  console.log(x)
  x--
}

let y = 100
console.log('\n * do / while')
do {
  console.log(y)
  y = y - 10
} while (y >= 0)

console.log('\n * for')
for (let i = 0; i < 25; i = i + 5) {
  console.log(i)
}

console.log('\n * break')
for (let i = 0; i < 10; i++) {
  if (i == 8) {
    console.log(i)
    break
  }
}

console.log('\n * continue')
for (let i = 10; i > 0; i--) {
  if (i % 2 == 0) {
    console.log('par')
    continue
  }
  console.log(i)
}

console.log('\n * valor da variavel')
let a = 0
let b = 10
a += 10
b -= 5
a++
b--
console.log(a)
console.log(b)

let sexo = 'M'
console.log('\n * switch')
switch (sexo) {
  case 'M':
    console.log('É homem')
    break
  case 'F':
    console.log('É mulher')
    break
  default:
    console.log('Indefinido')
    break
}
