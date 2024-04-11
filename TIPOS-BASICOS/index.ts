// string
let myStringVar: string =  'Jarlin';
myStringVar = 'Fonseca'
console.log(myStringVar);

// number
let myNumberVar: number =  10;
console.log(myNumberVar);

// boolean
let myBooleanVar: boolean = false;
console.log(myBooleanVar);

// null
let myNullVar: null = null;
console.log(myNullVar);

// undefined
let myUndefinedVar: undefined;
console.log(myUndefinedVar);


//----------
function myName(name: string): string{
    return `Hola como estas ${name}`
}

const myNameV2 = (name: string) => {
    return `Hola como estas ${name}`
}

let myNameV3: (name: string) => void  

myNameV3 = (name) => {
    console.log(`Hola como estas ${name}`)
}

console.log(myName('Jarlin'));
console.log(myNameV2('Andres'));
myNameV3('Fonseca');

// Segunda parte

// Array
const names: string[] = []
const namesV2: Array<string> = []	