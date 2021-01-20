// Esta era la manera antigua de crear y establecer funciones

function newFunction (name, age, country) {
    var name = name || "oscar";
    var age = age || 32;
    var country = country || "MX";
    console.log(name, age, country)
};

// esta es la nueva manera de hacerlo con es6

function newFunction2(name = "oscar", age = 32, country = "MX") {
    console.log(name, age, country)
}

//Funcion recibiendo todos los parametros  sin un objeto
function saveUser( name, lastName, age, country, city, postalCode, userName, password ){
	//...
}
//Al recibir todos los parametros de esta forma podemos equivocarnos al momento de invocar esta funcion
saveUser('pepe', 'perez', 20, 'Toronto', 'Canada', 0000,  'peperez', '123pass' ) // intercambiamos el parametro Country por el parametro City accidentalmente

//funcion recibiendo solo 1 objeto como parametro
function saveUser({ name, lastName, age, country, city, postalCode = 0000, userName, password }){
	//...
}
saveUser({ name: 'pepe', lastName: "perez", age: 20, city: 'Toronto', country: 'Canada', userName: 'peperez', password:'123pass' })//aqui intercambiamos la posicion de country y city nuevamente, pero esta vez no importa ya que todo se esta pasando dentro de un objeto, adicionalmente no estamos enviando el elemento postalCode pero su valor por 
defecto es 0000