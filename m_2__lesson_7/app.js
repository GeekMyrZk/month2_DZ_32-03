// //falsy elements -> false, 0, "", '', ``, undefined, null, NaN, -0, 0n
// //truthy elements -> the rest are true
//
// let element = '0'
// console.log(element ? 'true' : 'false')
//
// //замыкание
// function createPlayer(name) {
//     let score = 0
//     return function scoreCount(){
//         score ++
//         return `${name} - ${score} балла`
//     }
// }
//
// const one = createPlayer('Jack')
// const two = createPlayer('Bob')
//
// // OOP
// const animal = {
//     name: 'Animal',
//     age: 3,
//     color: 'black'
// }
// class Animal {
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.color = options.color
//     }
// }
//
// const animalByClass = new Animal({
//     name: 'Ball',
//     age: 4,
//     color: 'brown'
// })
//
// console.log(animalByClass)
//
// class Pigs extends Animal {
//     constructor(options) {
//         super(options)
//         this.hooves = options.hooves
//     }
// }
//
// const peppa = new Pigs ({
//     name: 'Peppa',
//     age: 2,
//     color: 'pink',
//     hooves: 4
// })
//
// console.log(peppa)

////////////////////////////////////////////////////////////////////////////////////

//Drag and drop

const dragAndDrop = ()=> {
    const card = document.querySelector('.list__card')
    const cells = document.querySelectorAll('.list__cell')    //возьмет первое совпадение по классу

    const dragStart = function (){
        setTimeout(()=> {
            this.classList.add('hide')
        }, 0)
    }
    const dragEnd = function (){
        this.classList.remove('hide')
    }
    const dragOver = function (){
        console.log('over')
    }

    cells.forEach((cell)=>{
        cell.addEventListener('dragover', dragOver)
    })

    card.addEventListener('dragstart', dragStart )
    card.addEventListener('dragend', dragEnd)
}


dragAndDrop()




