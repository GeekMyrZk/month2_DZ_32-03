// ПЕРВОЕ ЗАДАНИЕ
var month = prompt('enter name of month').toLowerCase()
switch (month) {
    case 'декабрь':
        console.log('winter')
        break
    case 'январь':
        console.log('winter')
        break
    case 'фервраль':
        console.log('winter')
        break
    case 'март':
        console.log('spring')
        break
    case 'апрель':
        console.log('spring')
        break
    case 'май':
        console.log('spring')
        break
    case 'июнь':
        console.log('summer')
        break
    case 'июль':
        console.log('summer')
        break
    case 'август':
        console.log('summer')
        break
    case 'сентябрь':
        console.log('autumn')
        break
    case 'октябрь':
        console.log('autumn')
        break
    case 'ноябрь':
        console.log('autumn')
}

// ВТОРОЕ ЗАДАНИЕ
var array = [[[[[[[[[[[2]]]]]]]]]]];
console.log(array[0][0][0][0][0][0][0][0][0][0][0])
alert(array[0][0][0][0][0][0][0][0][0][0][0])

// ТРЕТЬЕ ЗАДАНИЕ
var num1 = Number(prompt('Enter 1st number:'))
var num2 = Number(prompt('Enter 2nd number:'))
var action = prompt('Enter *, /, +, -')

switch (action) {
    case '*':
        console.log(num1 * num2)
        break
    case '/':
        console.log(num1 / num2)
        break
    case '+':
        console.log(num1 + num2)
        break
    case '-':
        console.log(num1 - num2)
        break
    default:
        console.log('Incorrect input')
}



