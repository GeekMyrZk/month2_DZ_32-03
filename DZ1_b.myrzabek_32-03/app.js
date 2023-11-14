var loginCorrect = prompt('Create login')
var passwordCorrect = prompt('Create password')

var login = prompt('Enter login')
var password = prompt('Enter password')

if (loginCorrect != login || passwordCorrect != password) {
    alert('Incorrect login or password. Try again.')
} else {
    alert('CORRECT!!!')
}

// второе задание

var word1 = prompt('enter word1')
var word2 = prompt('enter word2')

if (word1.length > word2.length){
    console.log(word1)
} else {
    console.log(word2)
}
