// ПЕРВОЕ ЗАДАНИЕ
var array = ['name', 'John', 'lastname', 'Black', 'age', '23']
var sorted = {}
for (var i=0; i < array.length; i++) {
    if (i % 2 === 0) {
        sorted[array[i]] = array[i+1]
    }
}
console.log(sorted)

// ВТОРОЕ ЗАДАНИЕ
function calculateAverage(...nums){
    var sum = 0
    for (var i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    var average = sum / nums.length
    return average
}

var result = calculateAverage(34, 9, 93, 3, 4, 6, 2, 1, 13)
console.log(result)

// ТРЕТЬЕ ЗАДАНИЕ
function TypeOfData(data){
    var type = typeof data
    console.log(`Тип данных: ${type}`)
}
TypeOfData(42)
TypeOfData("text")
TypeOfData(true)

// ЧЕТВЕРТОЕ ЗАДАНИЕ

// переписывал код  4 задания  несколько раз. так и не получилось

