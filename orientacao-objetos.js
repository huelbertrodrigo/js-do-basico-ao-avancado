let cachorros = {
  raca: '',
  patas: 0,
  cor: '',
  latir: function () {
    console.log('Au au')
  },
  setRaca: function (raca) {
    this.raca = raca
  },
  getRaca: function () {
    return this.raca
  }
}

console.log('\n* metodo')
cachorros.latir()

console.log('\n* set e get')
cachorros.setRaca('Pug')
console.log(cachorros.getRaca())

console.log('\n* prototypeof')
let labrador = Object.create(cachorros)
console.log(Object.getPrototypeOf(cachorros) === Object.prototype)
console.log(Object.getPrototypeOf(labrador))
console.log(Object.getPrototypeOf(labrador) === cachorros)
console.log(Object.getPrototypeOf(labrador) === Object.prototype)

console.log('\n* hasownproperty')
console.log(cachorros.hasOwnProperty('raca'))

labrador.setRaca('Labrador')
console.log(labrador.getRaca())
console.log(cachorros.getRaca())

console.log('\n* instancia classe 1')
function criarCachorro(raca, patas, cor) {
  let cachorro = Object.create({})
  cachorro.raca = raca
  cachorro.patas = patas
  cachorro.cor = cor
  cachorro.latir = function () {
    console.log('Au au')
  }
  return cachorro
}
let doberman = criarCachorro('Doberman', 4, 'Preto')
console.log(doberman)
doberman.latir()

console.log('\n* instancia classe por new')
function Cachorro(raca, patas, cor) {
  this.raca = raca
  this.patas = patas
  this.cor = cor
}

Cachorro.prototype.latir = function () {
  console.log('Auuuuu cachorro')
}

let husky = new Cachorro('Husky', 4, 'Branco')
console.log(husky)
husky.latir()

console.log('\n* class')
class Cachorros {
  constructor(raca, cor) {
    this.raca = raca
    this.cor = cor
  }

  get getCor() {
    return this.cor
  }

  set setCor(cor) {
    this.cor = cor
  }

  latir() {
    console.log('Au au pastor')
  }
}
/* mudando prototype padrao */
Cachorros.prototype.patas = 4

/* criando e acessando Symbol */
let orelhas = Symbol()
Cachorros.prototype[orelhas] = 2

let pastor = new Cachorros('Pastor Alemão')
pastor.setCor = 'Amarelo'
console.log(pastor.getCor)
console.log('patas', pastor.patas)
console.log('orelhas', pastor[orelhas])
console.log(pastor)
pastor.latir()

console.log('\n* heranca de class')
class Carros {
  constructor(portas) {
    this.portas = portas
  }

  buzinar() {
    console.log('Bi bi')
  }
}
Carros.portas = 4
class Marca extends Carros {
  constructor(portas, modelo) {
    super(portas, portas), (this.modelo = modelo)
  }
}
let fiat = new Marca(4, 'Fiat')
console.log(fiat)
fiat.buzinar()

console.log(new Marca() instanceof Carros)
