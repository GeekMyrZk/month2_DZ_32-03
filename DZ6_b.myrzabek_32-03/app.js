// // параметры по умолчанию
// const array = [1, 2, 3, 4, 5]
// // const newArray = array.join()
// const newArr = array.splice(1, 2)
// console.log(array)
//
// function joinArray(array, separator = '/') {
//     let resultText = ''
//     for (let i = 0; i < array.length; i++) {
//         const el = array[i]
//         resultText += el + (i === array.length - 1 ? '' : separator)
//     }
//     return resultText
// }
//
// console.log(joinArray([1, 2, 3, 4], ','))
//
// //контекст this
// var human = {
//     name: 'Aidana',
//     surname: 'Bekova',
//     id: 13,
//     isMarried : false,
//     address: {
//         city: 'Bishkek',
//         street :'Ibraimova',
//         number : null
//     },
//     // showInfo(){
//     //     // console.log(`${human.name}`)
//     //     console.log(`${this.name}`)
//     // },
//     showInfo2(){
//         function show(){
//             console.log(`${this.name}`)
//         }
//         show()
//     }
// }
//
// human.showInfo2()


//todolist

const createButton = document.querySelector('#create_button')
const input = document.querySelector('#input')
const todoList = document.querySelector('.todo_list')


const createTodo = () => {
    if(input.value.trim() === ''){
        return alert('Произошла ошибка, введите какой-нибудь текст')
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')

    const divButton = document.createElement('div')
    divButton.setAttribute('class', 'div_button')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')
    deleteButton.innerText = 'DELETE'
    deleteButton.onclick=()=>{
        div.remove()
    }

    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')
    editButton.innerText = 'EDIT'


    const text = document.createElement('h3')
    text.innerText = input.value
    text.addEventListener('click', ()=>{
        text.classList.toggle('toggle')
    })

    divButton.append(deleteButton, editButton)
    div.append(text, divButton)

    todoList.prepend(div)
    input.value = ''
    editButton.onclick=()=>{
        let modal= document.createElement("div")
        modal.setAttribute("class","modal")
        let modalText = document.createElement("h3")

        modal.innerHTML = text.innerHTML
        let modalInput = document.createElement("input")
        let modalDone = document.createElement("button")
        modalDone.setAttribute("class","div_button")
        modalDone.innerHTML = "DONE"
        div.style.filter="blur(4px)"
        createButton.style.filter = "blur(4px)"
        input.style.filter = "blur(4px)"
        modal.append(modalInput)
        modal.append(modalText)
        modal.append(modalDone)

        document.body.prepend(modal)

        modalDone.onclick=()=>{
            if(modalInput.value.trim() !=='') {
                text.innerHTML = modalInput.value
                modal.remove()
                div.style.filter = 'blur(0)'
                createButton.style.filter = "blur(0px)"
                input.style.filter = "blur(0px)"
            }
        }
    }
}

createButton.onclick = () => createTodo()
window.onkeydown = (event)=>{
   if(event.code === 'Enter'){
       createTodo()
   }
}






























