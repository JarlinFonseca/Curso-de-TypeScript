"use strict";
// string
let myStringVar = 'Jarlin';
myStringVar = 'Fonseca';
console.log(myStringVar);
// number
let myNumberVar = 10;
console.log(myNumberVar);
// boolean
let myBooleanVar = false;
console.log(myBooleanVar);
// null
let myNullVar = null;
console.log(myNullVar);
// undefined
let myUndefinedVar;
console.log(myUndefinedVar);
//----------
function myName(name) {
    return `Hola como estas ${name}`;
}
const myNameV2 = (name) => {
    return `Hola como estas ${name}`;
};
let myNameV3;
myNameV3 = (name) => {
    console.log(`Hola como estas ${name}`);
};
console.log(myName('Jarlin'));
console.log(myNameV2('Andres'));
myNameV3('Fonseca');
