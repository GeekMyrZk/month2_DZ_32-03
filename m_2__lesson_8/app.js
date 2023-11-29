//todolist
const editModal = document.querySelector('#modalEdit')
const editInp = document.querySelector('#inpEdit')
const editText = document.querySelector('#textEdit')

const createButton = document.querySelector("#create_button");
const input = document.querySelector("#input");
const todoList = document.querySelector(".todo_list");

const createTodo = () => {
    if (input.value.trim() === "") {
        return alert("Произошла ошибка, введите какой-нибудь текст");
    }

    const div = document.createElement("div");
    div.setAttribute("class", "block_text");

    const divButton = document.createElement("div");
    divButton.setAttribute("class", "div_button");

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete_button");
    deleteButton.innerText = "DELETE";

    deleteButton.onclick = ()=> {
        div.remove()
    }

    const text = document.createElement('h3')
    text.innerText = input.value
    text.addEventListener('click', ()=>{
        text.classList.toggle('toggle')
    })

    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')
    editButton.innerText = 'EDIT'

    editButton.onclick=()=>{
        edi
    }

    divButton.append(deleteButton, editButton)
    div.append(text, divButton)

    todoList.prepend(div)
    input.value = ''

};


//modal add todo
const closeModal = document.querySelector('.close')
const modal = document.querySelector('#myModal')
const createBtn = document.querySelector('.create')

const onOpen = ()=>{
    modal.style.opacity = '1'
    modal.style.transform = 'scale(1)'
}

function onClose() {
    modal.style.opacity = '0'
    modal.style.transform = 'scale(0)'
}

createButton.onclick = ()=> onOpen()

closeModal.onclick = ()=> onClose()

createBtn.onclick = ()=> {
    createTodo()
    onClose()
}


window.onkeydown = ()=>{
    if(event.code === 'Enter'){
        createTodo()
        onClose()
    }
}

const closeModalEdit = document.querySelector('#close')
function onCloseEdit(){
    modal.style.opacity = '0'
    modal.style.transform
}

function getSquareNums(arr){
    const newArray = []
    for(let i = 0; i<arr.length; i++){
        newArray.push(arr[i] * arr[i])
    }
    return newArray
}

console.log(getSquareNums([3, 43, 4]))

function getSquareNums(arr){
    const newArray = []
    for(let i = 0; i<arr.length; i++){
        newArray.push(arr[i] / 2)
    }
    return newArray
}

console.log(getSquareNums([3, 43, 4]))


function doSomeMath(array, action){
    const newArray = []
    for(let i = 0; i<array.length; i++){
        newArray.push(action(array[i]))
    }
    return newArray
}

function sum(num){
    return num+2
}

console.log(doSomeMath([1,2,3,4,4], sum))










