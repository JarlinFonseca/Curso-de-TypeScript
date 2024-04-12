"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// Segunda parte
// Array
const names = [];
const namesV2 = [];
names.push('Jarlin');
// Object o Records
const myObject = {
    name: 'Jarlin',
};
const myObjectV1 = {};
myObjectV1.name = 'Jarlin';
myObjectV1.age = 23;
const myObjectV2 = {
    name: 'Jarlin',
    age: 23
};
//Tuplas
const myObjectV3 = {};
myObjectV3.name = 'Jarlin';
myObjectV3.age = 23;
//Promise
const myPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((res, _rej) => {
        setTimeout(() => {
            res('Hola Mundo');
        }, 2000);
    });
});
myPromise().then((res) => console.log(res));
// Compuestos
const myNewObject = {
    name: 'Jarlin',
    age: 23
};
