/*const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

/*div.innerHTML = localStorage.getItem('InputValue')

button.addEventListener('click', (req,res) => {
    localStorage.setItem('InputValue',[1,2,3,4,5])
    div.innerHTML = input.value
})*/


/*const arr = [1,2,3,4,5]
/*localStorage.setItem('val',arr)
console.log(localStorage.getItem('val'))*/
/*const val = JSON.stringify(arr)
console.log(arr)
console.log(val)*/
/*localStorage.setItem('val', JSON.stringify(arr))
console.log(JSON.parse(localStorage.getItem('val')))*/


/*const path = require('path')
console.log(path.resolve('./index.html'))
console.log(path.relative('./index.js','./assets/css'))
console.log(path.extname('./index.html'))
console.log(path.dirname('./assets/css'))
console.log(__dirname)
console.log(path.join(__dirname,'app.js'))*/


const fs = require('fs')
/*fs.readFile('./test.txt', 'utf8', (data,error) => {
    if(error)
        console.log(error)
    else
        console.log(data)
})

console.log(fs.readFileSync('./test.txt', 'utf8'))

console.log('I am a random log')*/




/*fs.writeFile('./test.txt', 'New Stuff inside the file',
(error) => {
    if(error)
        console.log(error)
})*/


fs.writeFile('./test.txt', `Append me ${fs.readFileSync('./test.txt','utf8')}`,
(error) => {
    if(error)
        console.log(error)
})

