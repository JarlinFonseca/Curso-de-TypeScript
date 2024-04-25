
function SetAge(age: number){
    return function<T extends {new (...args: any[]):{}}>(constructor: T){
        return class extends constructor{
            age!: number;
            constructor(...args: any[]){
                super();
                this.age = age;
            }
        }
    }
}

@SetAge(25)
class Person{
    age!: number;
}

const person = new Person();
console.log(person.age);


function ValidateAge(age: number){
    return function(target: any, propName: string){
        let assignedAge = target[propName];
        Object.defineProperty(target, propName, {
            set: (newAge: number)=>{
                if(newAge<age){
                    throw new Error('Debe ser mayor o igual a 18');
                }

                assignedAge = newAge;
            },
            get: ()=> assignedAge,
        })
        
        
    };
}

class Person2{
    @ValidateAge(18)
    age: number = 28;
}

const newPerson = new Person2();
console.log(newPerson.age);

newPerson.age = 18;
console.log(newPerson.age);