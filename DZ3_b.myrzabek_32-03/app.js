// ПЕРВОЕ ЗАДАНИЕ
var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
var tagCount = {}

for (var i = 0; i < tags.length; i++){
    var tag = tags[i]
    if (tagCount[tag] === undefined){
        tagCount[tag] = 1
    }else{
        tagCount[tag]++
    }
}
console.log(tagCount)

// ВТОРОЕ ЗАДАНИЕ

var starBucks = {
    tea: {
        green: 'Classic green tea grown in India',
        black: 'Classic black tea from England',
        ceylon: 'Original ceylon tea from Shri-Lanka',
        mocha: 'Fusion of velvety cocoa and robust tea leaves'
    },
    coffee: {
        Espresso: 'A strong and concentrated shot of espresso, delivers a bold and invigorating flavor.',
        Cappuccino: 'Indulge in the perfect balance of espresso, steamed milk, and a layer of milk, creating a creamy and satisfying cappuccino.',
        Latte: 'Savor the smooth, velvety texture of a latte, where espresso meets steamed milk to offer a great coffee.',
        Americano: 'Experience the simplicity of an Americano, a diluted espresso with hot water, providing a robust flavor for a straightforward and refreshing cup.',
    }
}

var choice1 = prompt('Hello,  welcome! Do you want coffee or tea?')
switch (choice1) {
    case 'coffee':
        console.log(starBucks.coffee)
        var choiceCoffee = prompt('choose the name of the coffee from console and write').toLowerCase()
        if (choiceCoffee === 'espresso' || choiceCoffee === 'cappuccino' || choiceCoffee === 'latte' || choiceCoffee === 'americano') {
            alert('Your ' + choiceCoffee + ' coffee will be ready in 5 minutes!')
        }else {
            alert('Write "espresso", "cappuccino", "latte" or "americano"')
        }
        break
    case 'tea':
        console.log(starBucks.tea)
        var choiceTea = prompt('choose the name of the tea from console and write').toLowerCase()
        if (choiceTea === 'black' || choiceTea === 'green' || choiceTea === 'ceylon' || choiceTea === 'mocha') {
            alert('Your ' + choiceTea + ' tea will be ready in 5 minutes!')
        }else {
            alert('Write "black", "green", "ceylon" or "mocha"')
        }
        break
    default:
        alert('You can only write "coffee" or "tea"')
}

// если есть советы, напишите пожалуйста
