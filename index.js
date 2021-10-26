//console.log(module)

/*const greet = () => 'hi'
module.exports.greet = greet
console.log('I am index.js')*/

const add = () => {
    console.log('I add stuff')
}

const subtract = () => {
    console.log('I subtract stuff')
}

const multiplication = () => {
    console.log('I multiply stuff')
}

const division = () => {
    console.log('I divide stuff')
}

module.exports.add = add
module.exports.subtract = subtract
module.exports.multiplication = multiplication
module.exports.division = division
module.exports.message = "MESSAGE"

console.log(module)