function Pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre
	this.color = color
	this.nivelDeAmistadd = 0
	this.vida = 100
	this.poderDeAtaque = poderDeAtaque
	this.mostrarPokemon = function(){
		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color)
	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistadd = this.nivelDeAmistadd + valor
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque
	}
}

const Pikachu = new Pokemon("Pikachu", "amarillo", 100)
const Charmander = new Pokemon("Charmander", "rojo", 20)

Pikachu.atacar(Charmander)

console.log(Charmander.vida)