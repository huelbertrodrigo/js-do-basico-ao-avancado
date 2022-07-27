console.log('promise')
let p = Promise.resolve(5 + 3)
console.log('Outros códigos')
console.log(p)
p.then((value) => {
  return value + 2
}).then((value) => {
  console.log(`O valor é ${value}`)
})

// console.log('promise|catch')
// let pError = Promise.resolve(new Error('Não deu certo'))
// pError
//   .then((value) => console.log(value))
//   .catch((reason) => console.log('Falhou: ' + reason))

// console.log('promise|reject')
// function verificarNumero(num) {
//   return new Promise((resolve, reject) => {
//     if (num == 2) {
//       resolve(console.log(`O número é ${num}`))
//     } else {
//       reject(new Error('Falhou'))
//     }
//   })
// }
// verificarNumero(2)
// verificarNumero(3)

console.log('promise|all')
const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(10)
  }, 5000)
})
const p2 = Promise.resolve(10)
const p3 = new Promise((resolve, reject) => {
  resolve(10)
})
Promise.all([p1, p2, p3]).then((values) => console.log(values))

console.log('async')
async function somar(a, b) {
  return a + b
}
somar(2, 4).then((value) => console.log(value))

console.log('await')
function somaComDelay(a, b) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(a + b)
    }, 4000)
  })
}
async function resSoma(a, b, c) {
  let x = somaComDelay(a, b)
  let y = c

  return (await x) + y
}
resSoma(2, 2, 3).then((value) => console.log(value))

console.log('generator')
function* criardorId() {
  let id = 0
  while (true) {
    yield id++
  }
}
let criaId = criardorId()
console.log(criaId.next().value)
console.log(criaId.next().value)
