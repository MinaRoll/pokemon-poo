function Pokemon(nombre, color, nivelDeAmistadd, vida, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistadd = nivelDeAmistadd;
	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon =	function(){
								var pokemon = document.getElementById('contenedor');
    							pokemon.innerHTML += ("Hola, soy: " + this.nombre + "<br> Color: " + this.color + "<br> Poder de ataque: " + this.poderDeAtaque + "<br>")
  							}

	this.aumentarAmistad =	function(valor){
								this.nivelDeAmistadd = this.nivelDeAmistadd + valor
							}

	this.atacar =	function(pokemon){
						pokemon.vida = pokemon.vida - this.poderDeAtaque
    					//var batalla = document.getElementById('batalla');
    					//batalla.innerHTML = this.nombre + " vs " + pokemon.nombre + "!<br>" + pokemon.nombre + " tiene una vida de: " + pokemon.vida;
  					}
}


const Pikachu = new Pokemon("Pikachu", "amarillo", 98)
document.getElementById("contenedor").innerHTML += "<img src='pikachu.png' width='100'>";
const Charmander = new Pokemon("Charmander", "rojo", 96)
document.getElementById("contenedor").innerHTML += "<img src='charmander.png' width='100'>";
const Squirtle = new Pokemon("Squirtle", "celeste", 70)
document.getElementById("contenedor").innerHTML += "<img src='squirtle.png' width='100'>";
const Bulbasaur = new Pokemon("Bulbasaur", "verde azulado", 50)
document.getElementById("contenedor").innerHTML += "<img src='bulbasaur.png' width='100'>";
const Mew = new Pokemon("Eevee", "café", 100)
document.getElementById("contenedor").innerHTML += "<img src='eevee.png' width='100'>";
const Magikarp = new Pokemon("jigglypuff", "rosado", 30)
document.getElementById("contenedor").innerHTML += "<img src='jigglypuff.png' width='100'>";
const Snorlax = new Pokemon("Snorlax", "azul", 40)
document.getElementById("contenedor").innerHTML += "<img src='snorlax.png' width='100'>";


function pelea(){
  var pokemon1 = document.getElementById('pokemon1').value
  var pokemon2 = document.getElementById('pokemon2').value
  var number = Math.floor((Math.random() * 100) + 1);
  var atacante = new Pokemon(pokemon1, "blue", number, 100, number);
  var atacado = new Pokemon(pokemon2, "green", number, 100, number);
  if(atacante.nombre == atacado.nombre){
    alert("You can't fight with yourself!");
  } else{
    	atacante.atacar(atacado);
		var message = document.getElementById("mensaje");
		var mensaje1 = (atacante.nombre + " atacó a " + atacado.nombre + " y a " + atacado.nombre + " le quedan " + atacado.vida + " puntos de vida");
		message.innerHTML = mensaje1;
	}
}