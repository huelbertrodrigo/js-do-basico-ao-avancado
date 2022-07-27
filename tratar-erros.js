let a = 1
let b = 2
let c = 3
a++
debugger
a = b * c
debugger

console.log('\n* validar valor')
function verificarNumeros(valor) {
  let numero = Number(valor)
  if (Number.isNaN(numero)) {
    return null
  } else {
    return numero
  }
}
console.log(verificarNumeros(5))
console.log(verificarNumeros('numero'))

console.log('\n* exception')
function saudacao(nome) {
  if (typeof nome != 'string') {
    throw new Error('Favor passar um nome!!!')
  } else {
    console.log(`Bem vindo ${nome}`)
  }
}

saudacao('José')
// saudacao(5)

console.log('\n* try / catch / finally')
try {
  // let a = 2 + d
} catch (e) {
  console.log(e)
} finally {
  console.log('executou')
}
