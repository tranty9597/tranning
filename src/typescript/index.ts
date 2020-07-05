export interface Person {
    name: string
    age: number
}

// Khai bao bien
let aNumber: number = 100
let aString: string = 'a String'
let aNumberArray: number[] = [1, 2, 3, 4, 5]
// console.log(aNumberArray.length)
let aObject: object = { propertyA: 'A', propertyB: 'b' }

let aBoolean: boolean = false

let personA: Person = { name: 'Tran Ty', age: 24 }

// console.log(personA.age)

// Khai bao hang

const personB: Person = { name: 'personBB', age: 24 }

// Khai bao function
function toString(person: Person): string {
    return person.name + ' age: ' + person.age
}

const arrowFunctionToString = (person: Person, withAge: boolean): string => {
    if (withAge) return person.name + ' age: ' + person.age
    return person.name
}

const ifElseFunction = (person: Person) => {
    if (person.name === 'Tran Ty') {
        console.log('If case')
    } else {
        console.log('else case')
    }
}

const switchCaseFunction = (person: Person): string => {
    switch (person.age) {
        case 24:
            return 'Young'
        case 25:
            return 'Old'
        default:
            return 'Unknow'
    }
}

const forLoopFunction = () => {
    // for (let i = 0; i < 100; i++) {
    //     console.log(i)
    // }
    // let i = 5
    // while(i> 0) {
    //     console.log(i)
    //     i--;
    // }
    const callBack = (i: number) => { console.log(i) }
    aNumberArray.forEach(callBack)
}


// forLoopFunction()
// console.log(switchCaseFunction(personB))



// // console.log(toString(personA))
// // console.log(arrowFunctionToString(personA, false))

// console.log(ifElseFunction(personB))

// Defin class

class Animal {
    // type: string
    // name: string
    // constructor(type: string, name: string) {
    //     this.type = type
    //     this.name = name
    // }

    constructor(
        public type: string,
        public name: string
    ) { }

    toString() {
        return 'name: ' + this.name
    }
}
const animal = new Animal('Dog', 'Mickey')
console.log(animal.toString())

interface Runable {
    speed: number,
    run(): void
}

class Human extends Animal implements Runable {

    speed: number = 100

    run() {
        console.log(this.name + ' is running with speed: ' + this.speed)
    }

    toString() {
        return super.toString()
    }
}

const human = new Human('Human', 'Jonh Doe')
console.log(human.toString())