// // 2 Types of memory === Stack and Heap memory

// // Stack memory ( Primitive types )

// let nameOne = "Rohit"
// let nameTwo = nameOne

// nameTwo = "Ravi"

// let nameThree = nameTwo // it will copy the value so it will never change its original value

// nameThree = "Rahul"

// console.log(nameOne)
// console.log(nameTwo)
// console.log(nameThree)


// // Heap memory ( Non-Primitive types )

// let userOne = {
//     name: "Rohit",
//     age: 22
// }

// let userTwo = userOne

// userTwo.age = 23

// let userThree = userTwo // it will take reference from the original value so it will change all values

// userThree.name = "Ravi"

// console.log(userOne)
// console.log(userTwo)
// console.log(userThree)