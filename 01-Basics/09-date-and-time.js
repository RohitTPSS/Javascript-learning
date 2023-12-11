//////// DATE /////////

// Jan 1 1970, UTC ( beginning of date start from )

let myDate = new Date()
console.log(myDate)
console.log(typeof myDate)  // Object
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())

let myCreatedDate = new Date("")
console.log(myCreatedDate.toDateString)

document.getElementById('addClassButton').addEventListener('click', function () {
    document.body.classList.toggle('addClass');
});
