const reg1 = RegExp('bola')
console.log(1, reg1.test('Tem bola?'))
console.log(1, reg1.test('Não tem'))
const reg2 = /bola/
console.log(2, reg2.test('Tem bola?'))
console.log(2, reg2.test('Não tem'))

console.log(3, /Testando/.test('Testando'))
console.log(3, /Testando/.test('123'))

console.log(4, /[123]/.test('Tem 123 alunos'))
console.log(4, /[1-9]/.test('3 deles são formados'))

console.log('ponto /./')
console.log(/./.test('123 abs'))

console.log('digito d') // or /\d+/
console.log(/\d/.test('123'))
console.log(/\d/.test('abc '))
console.log(/\d/.test(' '))

console.log('não digito D')
console.log(/\D/.test('123'))
console.log(/\D/.test('abc '))
console.log(/\D/.test(' '))

console.log('alfanumerico w')
console.log(/\w/.test('123'))
console.log(/\w/.test('abc'))
console.log(/\w/.test(' '))

console.log('não alfanumerico W')
console.log(/\W/.test('123'))
console.log(/\W/.test('abc'))
console.log(/\W/.test(' '))

console.log('espaço s')
console.log(/\s/.test('123'))
console.log(/\s/.test('abc'))
console.log(/\s/.test(' '))

console.log('não espaço S')
console.log(/\S/.test('123'))
console.log(/\S/.test('abc'))
console.log(/\S/.test(' '))

console.log('teste ano')
let ano = /\d\d\d\d/
console.log(ano.test('05'))
console.log(ano.test('2019'))
console.log(ano.test('opa'))

console.log('teste 3 letras')
let palavrasPeloMenos3letras = /\w\w\w/
console.log(palavrasPeloMenos3letras.test('oi'))
console.log(palavrasPeloMenos3letras.test('rio'))
console.log(palavrasPeloMenos3letras.test('123'))

console.log('not ^')
let ab = /[^abobora]/

console.log(ab.test('feijao'))
console.log(ab.test('abobora'))
console.log(ab.test('abobora com limao'))

console.log('questio ?')
let abacaxi = /abacax?i/
console.log(abacaxi.test('abacaxi'))
console.log(abacaxi.test('abacai'))
let numeroLetra = /\d+\w?/
console.log(numeroLetra.test('123abc'))
console.log(numeroLetra.test('abc'))
console.log(numeroLetra.test('123 '))

console.log('operador com precisao')

console.log('cep')
let cep = /\d{5}-\d{3}/
console.log(cep.test('37190-000'))
console.log(cep.test(37190 - 000))
console.log(cep.test('asdda-asd'))

console.log('telefone')
let telefone = /\(\d{2}\)\d{4,5}-\d{4}/
console.log(telefone.test('(35)3265-2500'))
console.log(telefone.test('(35)99999-2500'))
console.log(telefone.test('(35)99999-abcd'))

console.log('exec')
const digitos = /\d+/
console.log(digitos.exec('Tem o número 100 aqui'))
console.log(digitos.exec('Tem o número aqui'))

console.log('match')
const frase = 'Tem o número 100 aqui'.match(/\d+/)
const frase1 = 'Tem o número aqui'.match(/\d+/)
console.log(frase)
console.log(frase1)

console.log('choice pattern')
const regNomes = /\w+: (Matheus|João|Maria)/
console.log(regNomes.test('Nome: Matheus'))
console.log(regNomes.test('Nome: José'))
