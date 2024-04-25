type Perro = {
    nombrePerro: string;
    edad: number;
    ladra: boolean;
}

type Gato = {
    nombreGato: string;
    edad: number;
    tepra: boolean;
}

type SeleccionAnimnal<T extends 'perro' | 'gato'> = 
T extends 'perro' ? Perro : Gato;

function seleccionAnimal<T extends 'perro' | 'gato'>(animal: SeleccionAnimnal<T>) {
    console.log(animal);
}

seleccionAnimal< 'perro' >({
    nombrePerro: 'Toby',
    edad: 5,
    ladra: true
})
