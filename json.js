let pessoas = {
  nome: 'João',
  idade: 33
}
console.log(`${pessoas.nome} tem ${pessoas.idade} anos`)

console.log('\n* object to string JSON')
let objToJson = JSON.stringify(pessoas)
console.log(objToJson)

console.log('\n* string JSON to object')
let jsonToObj = JSON.parse(objToJson)
console.log(jsonToObj)
