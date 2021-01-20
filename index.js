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


//Forma Normal
let hello= "Hello";
let world="Mundo";
let frase = hello+" "+world;
console.log(frase);

//Template literal es6
let fraseTemplateLiteral = `${hello}${world}`;
console.log(fraseTemplateLiteral);


//Forma normal separaciones de línea.

//Antes para realizar multilíneas se usaba  backslash (alt+92) + n + "" continuar una línea
let Frase ="KANSClnclnsnspan pscapo apso  \n" //Multilíneas
+ "ljsndljnvsjd"

//Con los Template literals `` se puede sencillamente realizar un enter para pasar de línea.
let Frase_es6 = `Lknlasknlncs
dksvñsnkvlksnnldkvsnd`;

console.log(Frase);
console.log(Frase_es6);

// Destructuración de elementos:

//Antes los objetos podía ser creados así:

let person ={
    'name':'Alejandro',
    'nick':'Etrx',
    'num':'12314125'
};

//Si queríamos llamar  lo que componía ese objeto utilizabamos:
console.log(person.name,person.nick,person.num);

//Ahora con la destrucción de elementos, sucede una especie de resumen, donde se extrae un factor común del nombre del objeto, así:
let {name,nick, num} = person;

//Si queremos llamar  lo que compone este objeto utilizamos en ES6:
console.log(name,nick);


//Operador de prolongación: Permite expandir varios elementos. Tenemos varios elementos en arreglos que queremos unir en un solo elemento para presentarlos.

let conjunto1= ['a','b','c'];
let conjunto2= ['x','y','z'];

let conjunto_union=['l','m','n',...conjunto1,...conjunto2]
console.log(conjunto_union);

//Asiganciones mediante let se pueden inicilizar variables  cuyo scope está solo en el bloque de código en el que está llamada, en otras palabras, solo puede existir las variables let dentro de las llaves en que se llaman. Var se seguirá usando para variables globales y locales.
 

{
    var VariableGlobal= "...";
}

{
    let VariableLocal= "***";
    console.log(VariableLocal); // Al estar dentro de las llaves o el bloque de código console se ejecutará con normalidad
}

console.log(VariableGlobal);
console.log(VariableLocal); // Al ejecutar esta arroja error al estar fuera del scope donde fue declarada.



//Const, nos permitirá establecer una variable como una constante, donde el valor declarado no podrá cambiar.

const a = "Soy constante";
a = "No soy constante" ; // Al ejecutar arroja error porque no puede cambiarse una constante luego de declararse.

console.log(a);


//Propiedad de objetos mejorada.

let name =" Alejandro";
let nick =" Alejandro-sin";

ObjES6={name, nick}; //Nos permite ahorrar código para objetos muy grandes.
console.log(ObjES6);

//ArrowFunction

const names= [
    {name:"Alejandro",nick:"Alejandro-sin"},
    {name:"etrx",nick:"xrte"}
]

//Antes se iteraba mediante map y se usaban funciones anónimas.

let lista = names.map(function(item){
    console.log(item.names);
})

//Ahora esta función anónima se reemplaza por => un arrow, flecha que apunta a.

let listaES6 = names.map(item =>console.log(item.names));{ 
}

const listaES6_const = (name, nick) =>{
    ...
}

const listaES6_const_único_elemento = name =>{
    ...
}

const square = num => num *num; // Se evita el uso de return.

// Promesas, sirven para trabajar el asincronismo y hacer peticiones a una API. 
//Cómo su nombre indica dice que algo va a suceder.

const helloPromise =() =>{
    return new Promise ((resolve,reject)=>{
        if(true){
            resolve('Resuelto');
        } else {
            reject('Rechazado');
        }
    })
}

helloPromise()
    .then(Response => console.log(Response))
    .catch(error=> console.log(error));
   


    /* Classes
    */
   class Calculator {
     constructor() {
       this.valueA = 0;
       this.valueB = 0;
     }
   
     sum(valueA, valueB) {
       this.valueA = valueA;
       this.valueB = valueB;
       return this.valueA + this.valueB;
     }
   }
   
   const calc = new Calculator();
   console.log('Calc Result -> ', calc.sum(2, 3));
   
   /**
    * Modules
    */
   import { hello } from './class4-module.js';
   console.log('Hello Module -> ', hello());
   
   /**
    * Generators
    */
   function* helloWorld() {
     if (true) {
       yield 'Hello, ';
     }
   
     if (true) {
       yield 'World!';
     }
   }
   const generatorHello = helloWorld();
   console.log('generatorHello first call -> ', generatorHello.next().value);
   console.log('generatorHello second call -> ', generatorHello.next().value);
   console.log('generatorHello third call -> ', generatorHello.next().value);



   /**
 * Includes (averiguar si un valor se incluye en el arreglo) desde ES7
 */
let numbers = [1, 2, 3, 7, 8];
const VALUE = 7;

if (numbers.includes(VALUE)) {
  console.log(`Sí se encuentra el valor ${VALUE}`);
} else {
  console.log(`No se encuentra el valor ${VALUE}`);
}

/**
 * Potencia, ahora se ñadieron las potenias como operador aritmetico
 */
let base = 4;
let exponent = 4;
let result = base ** exponent;
console.log(`Result -> ${result}`);

//ES8 (ECMA SCRIPT 8)


//Object entries deveule los valores de una matriz.

const data ={
    front:'Alej',
    back: 'Rel'
};

//Tranformar este objeto en una matriz. 
const entries =Object.entries(data);
console.log(entries);
//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length);



//Objetc Values: Me devuelve los valores de un objeto a un arreglo. 


const data= {
    front:'Alej',
    back: 'Rel'
}

const values = Object.values(data);
console.log(values);

// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string ='hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12,'hi')) // Se añade al final la palabra 'hi'


//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const data= {
    front:'Alej', // Puede existir
    back: 'Rel'
}



// Async Await
const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {    
            console.log('We are preparing your Ice cream...')
            setTimeout(() => {
                resolve('Here you are a Chocolate Ice cream');
            }, 6000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Sorry! You do not have enough money :('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}

const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to Ice Cream World!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(e) {
        console.log(e); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}

buyIceCream(600); //1. llamas a la funcion comprar helado e Ingresas el dinero


//EMCAScript9 (ES9)

/**
 * Spread Operator
 */
const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
  };
  
  let { name, ...addInfo } = obj;
  console.log(`name: ${name}`);
  console.log(`additional information: `, addInfo);
  
  let { country, ...nameAndAge } = obj;
  console.log(`name and age: `, nameAndAge);
  
  /**
   * Porpagation Properties
   */
  const person = {
    name: 'Oscar',
    age: 32
  };
  
  const personInformation = {
    ...person,
    country: 'MX'
  };
  console.log(`personInformation: `, personInformation);
  
  /**
   * Promise Finally
   */
  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      true
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(new Error('Test Error'));
    });
  };
  
  helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));
  
  /**
   * Regex
   */
  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  const match = regexData.exec('2018-04-28');
  const year = match[1];
  const month = match[2];
  const day = match[3];
  console.log('Date -> ', year, month, day);

//ECMASCRIPT10 (ES10)


  //--------------method flat---------------/
//devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

//----------------trim---------------------------/
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

let hello = 'hello world                  ';
console.log(hello);
console.log(hello.trimEnd()); // final

//-------------optional catch biding-------------/

try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

//-------------fromEntries----------------------/
// array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);```