var htmlTag = ['li', 'div', 'li', 'li', 'li', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
var tagObject = {}
for (var i = 0; i < htmlTag.length; i++) {
    if (tagObject.hasOwnProperty(htmlTag[i])) {
        tagObject[htmlTag[i]] += 1
    } else {
        tagObject[htmlTag[i]] = 1
    }
}
console.log(tagObject)

//sort
console.log(Object.keys(tagObject).sort(function (tag1, tag2) {
    return tagObject[tag1] - tagObject[tag2]
}))

//filter
var fruits = ['apple', 'cherry', 'pineapple', 'banana', 'orange']
var fruitsForFilter = fruits.filter(i => i.length >= 6)
console.log(fruitsForFilter)
console.log(fruits)

var users = [
    {name: 'Adam', age: 30},
    {name: 'John', age: 12},
    {name: 'Jack', age: 17},
    {name: 'Aibek', age: 45},
    {name: 'Aaron', age: 14},
    {name: 'Erbol', age: 19},
    {name: 'Ruslan', age: 24},
]

var resultAge = users.filter(i => i.age < 18)
var resultName = users.filter(i => i.name.toLowerCase().includes('a'))
console.log(resultAge)
console.log(resultName)

//map
var numbers = [1, 2, 3, 4]
var newNumbers = numbers.map(i => i * 2)
console.log(newNumbers)

var soms = [230000, 560000, 780000, 9000000]
var dollars = soms.map(i => i / 89)
var fixDollars = dollars.map(i => i.toFixed(1))
console.log(dollars)
console.log(fixDollars)

// console.log(hello)
// console.log(hello2)

//forEach
var numbers2 = [3, 4, 5, 6, 7]
numbers2.forEach(i => console.log(i * 4))

var arrayNum = [23, 23, 34, 4, 5, 45, 56, 67, 55, 55, 44, 34, 33, 67, 66, 6, 6, 8, 7, 9, 8, 9, 8]
var numSet = new Set(arrayNum)
var array = Array.from(numSet)
console.log(array)

//ES6+
var hello = 'hello'  //hoisting
let hello2 = 'hello2'
const array2 = []
array2.push(7)
console.log(array2)
// array2 = 90

//rest-параметры
function getAllSum(...nums){
    console.log(nums)
    let sum = nums.reduce((n1, n2)=>n1+=n2)
    console.log(sum)
}
getAllSum(45,56,67,78)




