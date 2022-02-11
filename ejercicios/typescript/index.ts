// Boolean
let muted: boolean = true;

muted = false;

// no admite muted = 'true';


// Numeros

let num: number = 42;
let denom: number = 6;
// no admite denom = '6';

let result = num / denom;


// String

let nombre: string = 'Diego';
let saludo = `Me llamod ${nombre}`;


// Arrays

let people: string[];

people = ['Isa', 'Nicol', 'Raul'];

people.push('Juan');
//no admite people.push(2);

let peopleAndNumbers: Array<string | number> = [];

peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(40);



// Enum

enum colorEnum {
    Red = 'Rojo',
    Verde = 'Green',
    Azul = 'Azul'
}

let colorFavorito = colorEnum.Azul;

console.log(colorFavorito);


// Any

let comodin: any = 'Joker';
comodin = {type: 'F'};


// Object
let obj: object = {color: 'Rojo'};

//no admite obj = 2;

obj = {comida: 'azul', bool:true};