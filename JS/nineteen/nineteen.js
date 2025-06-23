// let obj = {
//     a: 1,
//     b: "yash"
// }

// console.log(obj);

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }
// rabbit.__proto__ = animal; // rabbit inherits from animal

class Animal {
    constructor(name){
        this.name = name;
        console.log(" object is created");

    }
    eat() {
        console.log("eating");
    }
    jump() {
        console.log("jumping");
    }

}
class lion extends Animal {
    constructor(name) {
        super(name); // call the parent constructor
        console.log("lion is created");
    }
    eat() {
        super.eat(); // call the parent method
        console.log("roaring");
    }
}

let a = new Animal("dog");
console.log(a);

let l = new lion("lion");
console.log(l);