function imprimirNoConsole() {
  console.log('Imprimindo no console')
}
imprimirNoConsole()

function imprimirUmNumero(numero) {
  console.log(`Imprimir o número ${numero}`)
}
imprimirUmNumero(5)

const numeroAleatorio = function () {
  console.log(Math.random())
}
numeroAleatorio()

function multiplicarTresNumeros(x, y, z) {
  console.log(x * y * z)
}
multiplicarTresNumeros(1, 2, 3)

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh) {
    console.log('Pode dirigir')
  } else {
    console.log('Não pode dirigir')
  }
}
podeDirigir(18, 0)
podeDirigir(19, 1)
podeDirigir(44, false)
podeDirigir(22, true)

let n = 10
const numero = function () {
  let n = 25
  console.log(n)
}
numero()
console.log(n)

function somaVerificaParametros(a, b) {
  if (a === undefined || b === undefined) {
    console.log('Preencha os dois parametros')
  } else {
    console.log(a + b)
  }
}

somaVerificaParametros(2)
somaVerificaParametros(2, 1)

function saudacao(nome, mensagem = 'seja bem vindo!!!') {
  console.log(nome, mensagem)
}

saudacao('Rodrigo')
