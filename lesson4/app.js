// стрелочные функции
var getPositionElement = (element, array) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return console.log(i)
        }
    }
    return console.log('404')
}

getPositionElement(4, [5, 6, 7, 8, 9, 3, 2, 1])

//lambda
var maxNum = (num1, num2) => console.log(num1 / num2)
maxNum(3, 1)

//HOF
var alertName = (funcName) => funcName()

// var windowName = () => alert('Aidana')

//callback
// alertName(windowName)

var button = document.querySelector('button')

function buttonClick() {
    return console.log('click!')
}

button.addEventListener('click', buttonClick)


var sumArray = (array) => {
    var sum = 0
    for(var i = 0; i< array.length; i++){
        sum += array[i]
    }
    return console.log(sum)
}
sumArray([1, 2, 3])

// 1) глобальная область
//2) локальная
// 3) функциональная

//DOM
console.dir(document.body.style.background = 'green')
var text = document.getElementsByClassName('text')
console.log(text)
text[1].innerHTML = 'hello from JS'
text[1].style.color = 'red'

var btn = document.getElementById('btn')
btn.onclick = () => console.log('clickkk')




