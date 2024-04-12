"use strict";
const example = { myGenericType: 'Jarlin' };
console.log(example);
const { myGenericType } = example;
console.log(myGenericType);
function getValue(value) {
    console.log(value);
}
getValue('Generico Funcion');
const getValueFlecha = (value) => {
    console.log(value);
};
getValueFlecha('Generico Flecha');
class GenericClass {
    constructor(myGenericType) {
        this.myGenericType = myGenericType;
    }
}
const myGenericClass = new GenericClass('Clase generica');
console.log(myGenericClass.myGenericType);
class GenericClassV2 {
    constructor(value) {
        this.value = new value();
    }
}
class Jarlin {
    constructor() {
        this.name = 'Jarlin';
        this.age = 23;
    }
}
class Maria {
    constructor() {
        this.nameMaria = 'Maria';
        this.ageMaria = 23;
    }
}
class Greet extends GenericClassV2 {
    constructor() {
        super(Jarlin);
    }
    greet() {
        console.log(`Hola soy ${this.value.name} y tengo ${this.value.age} años`);
    }
}
new Greet().greet();
