interface MyGenericInterface<T, U> {
    myGenericType: T | U;
}

const example: MyGenericInterface<string, number | boolean> = { myGenericType: 'Jarlin' };
console.log(example);

const { myGenericType } = example;
console.log(myGenericType); 

function getValue<T>(value: T){
    console.log(value);
}
getValue('Generico Funcion');

const getValueFlecha = <T>(value: T) => {
    console.log(value);
}
getValueFlecha('Generico Flecha');

type MyGenericType<T, U> = {
    myGenericType: T | U;
}

class GenericClass<T, U> {
    myGenericType: T | U;
    constructor(myGenericType: T | U){
        this.myGenericType = myGenericType;
    }
}

const myGenericClass = new GenericClass<string, number>('Clase generica');
console.log(myGenericClass.myGenericType);

class GenericClassV2<T> {
    protected value!: T;
    constructor(value: { new (): T }){
        this.value = new value();
    }
}

class Jarlin {
    public name: string = 'Jarlin';
    public age: number = 23;
}

class Maria {
    public nameMaria: string = 'Maria';
    public ageMaria: number = 23;
}

class Greet extends GenericClassV2<Jarlin> {
    constructor(){
        super(Jarlin);
    }

    public greet(): void{
        console.log(`Hola soy ${this.value.name} y tengo ${this.value.age} años`);
    }
}

new Greet().greet();


