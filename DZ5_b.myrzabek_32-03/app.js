// ПЕРВОЕ ЗАДАНИЕ
let arrayWithDuplicates = [1, 22, 3, 7, 111, 4, 2, 5, 6, 22, 3, 7, 8, 111]
let arrayFiltered = []

for (let i = 0; i < arrayWithDuplicates.length; i++){
    if (arrayFiltered.indexOf(arrayWithDuplicates[i]) === -1){
        arrayFiltered.push(arrayWithDuplicates[i])
    }
}
console.log(arrayFiltered)

// ВТОРОЕ ЗАДАНИЕ
const filterBooks = function(array) {
    let filteredBooks = array.filter(name => name.toLowerCase().includes('у'));

    let leftBooks = array.filter(name => !name.toLowerCase().includes('у'));

    filteredBooks = filteredBooks.map(name => `${name} - книга с буквой «у»`)

    console.log(filteredBooks)
    console.log(leftBooks)
}
const booksNames = ['Убежище', 'Белый Бим черное ухо', 'Война и мир', 'Сумерки', 'Мгла']
filterBooks(booksNames)

// ТРЕТЬЕ ЗАДАНИЕ
const users = [
    {name:'Rick'   , age: 45},
    {name:'Morty'  , age: 14},
    {name:'Jake'   , age: 25},
    {name:'Finn'   , age: 17},
    {name:'Luffy'  , age: 19},
    {name:'Patrick', age: 15},
    {name:'Bob'    , age: 15},
    {name:'Zoro'   , age: 26}
]
const usersSortedByAge = users.sort((user1, user2) => user1.age - user2.age)
const difference =usersSortedByAge[usersSortedByAge.length-1].age - usersSortedByAge[0].age
console.log(`User ${usersSortedByAge[usersSortedByAge.length-1].name} is ${difference} years older than user ${usersSortedByAge[0].name}`)





