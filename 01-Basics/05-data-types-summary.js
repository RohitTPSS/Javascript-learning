// Javascript is a Dynamic typed language

// Primitive Datatypes
// 7 types === String, Number, Boolean, Null, Undefined, symbol, Bigint


const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId) // False 

const bigNumber = 123456789101112n // Bigint

// Non-premitive datatypes ( Reference type )
// types === array, Objects, functions  

const names = ["Ravi", "Raina", "Rahul"] // arrays

const info = {
    name: "Rohit",
    age: 23
}

const myFunction = function () {  // Funtion 
    console.log("Hello World!")
}

console.table({ names, info, myFunction }) // Objects

console.log(typeof names) // (type of = Object)
console.log(typeof info) // (type of = Object)
console.log(typeof myFunction) // (type of = Object)