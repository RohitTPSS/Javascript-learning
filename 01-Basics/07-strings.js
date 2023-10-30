// let name = "Rohit"
// let age = 23

// console.log(name + "    " + age)

// // String interpolation ( using backticks `` )

// console.log(`My name is ${name} and i am ${age} years old.`)

// // another type to write string ( Constructor )

// const originalName = new String("Rohit")
// console.log(originalName)

// // Methods of string

// console.log(originalName[1]) // it will let you know the alphabet of this place 
// console.log(originalName.__Proto__)
// console.log(originalName.length) // it will let you know the length of text 
// console.log(originalName.charAt(2)) // it will let you know the alphabet of this place 
// console.log(originalName.indexOf("h")) // it will let you know the number of this alphabet
// console.log(originalName.toLowerCase()) // it will lowercase the content
// console.log(originalName.toUpperCase()) // it will uppercase the content

// const value = originalName.substring(2, 4) // it will not compromise negative value
// console.log(value)

// const anotherValue = originalName.slice(-1, 5) // it will also worked on neagtive value
// console.log(anotherValue)

// const newValueOne = "     Rohit     "
// console.log(newValueOne)
// console.log(newValueOne.trim()) // it will trim white spaces and line terminators from start and end both ways

// const url = "https://rohit%20website.com"
// console.log(url.replace("%20", "-")) // it will replace the content you want to change
// console.log(url.includes("%20")) // it will let you know that the text you are searching is in that content or not by saying true or false

// console.log(name.split("h")) // it will make this string into arrays by splitting from the text you choose