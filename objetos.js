let carro = {
  nome: 'Fusca',
  ano: 1986,
  buzina: function () {
    console.log('bi biiiii')
  }
}
console.log(`O ${carro.nome} é do ano ${carro.ano}`)
carro.buzina()

console.log('\n* incluir e deletar')
carro.teto = true
console.log(carro)
delete carro.teto
console.log(carro)

console.log('\n* assign(herdando fusca pra carro)')
let fusca = {
  dono: 'João Pedro'
}
Object.assign(carro, fusca)
console.log(carro)

console.log('\n* keys (pega as propriedades de um objeto)')
console.log(Object.keys(carro))

console.log('\n* objetos diferentes')
let pessoa1 = {
  nome: 'João'
}
pessoa2 = pessoa1
let pessoa3 = {
  nome: 'João'
}
console.log(pessoa1 == pessoa2)
console.log(pessoa1 == pessoa3)

console.log('\n* destructuring')
let objPessoa = {
  nome: 'João',
  idade: 33
}
let { nome: _nome, idade: _idade } = objPessoa
console.log(`${_nome} tem ${_idade} anos`)
