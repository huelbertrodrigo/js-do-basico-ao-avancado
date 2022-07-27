console.log('* trim')
let strTrim = '    Teste de TRIM   \n'
console.log(strTrim)
console.log(strTrim.trim())

console.log('\n* padStart')
let milAoContrario = '1'
console.log(milAoContrario.padStart(4, '0'))

console.log('\n* slit')
let frase = 'O rato roeu a roupa do rei de roma'
let palavras = frase.split(' ')
console.log(palavras)

console.log('\n* join')
let fraseJoin = palavras.join('|')
console.log(fraseJoin)

console.log('\n* repeat')
let palavra = 'Repetir '
console.log(palavra.repeat(3))

console.log('\n* rest operator')
function imprimirNumeros(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i])
  }
}
imprimirNumeros(2, 4, 6, 8)
