// // параметры по умолчанию
// const array = [1, 2, 3, 4, 5]
// const newArray = array.join('/')
// console.log(newArray)
//
// function joinArray(array, separator = '*сепаратор*') {
//     let resultText = ''
//     for (let i = 0; i < array.length; i++) {
//         const el = array[i]
//         resultText += el + (i === array.length - 1 ? '' : separator)
//     }
//     return resultText;
// }
//
// console.log(joinArray([1, 4, 3, 3, 5, 5]))
//
// const newArr = array.splice(1, 2)
// console.log(newArr) // хранит удаленные данные
// console.log(array)  // мутировавший array
//

// ///////////////////////////////////////////////////////////////////////////////////////Function to add a new task
// function addTask() {
//     // Get the input value
//     var taskInput = document.getElementById("taskInput");
//     var taskText = taskInput.value;
//
//     // Check if the input is not empty
//     if (taskText.trim() !== "") {
//         // Create a new task element
//         var taskElement = document.createElement("div");
//         taskElement.className = "task";
//         taskElement.innerHTML = taskText + '<button onclick="removeTask(this)">Remove</button>';
//
//         // Append the task to the tasks container
//         var tasksContainer = document.getElementById("tasks-container");
//         tasksContainer.appendChild(taskElement);
//
//         // Clear the input
//         taskInput.value = "";
//     }
// }
//
// // Function to remove a task
// function removeTask(buttonElement) {
//     var taskElement = buttonElement.parentElement;
//     taskElement.remove();
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// todolist

const createButton = document.querySelector('#create_button')
const input = document.querySelector('#input')
const todoList = document.querySelector('.todo_list')
const createTodo = () => {
    if (input.value.trim() === ''){   // input checker
        return alert('Текст нужен, бро')
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')

    const divButton = document.createElement('div')
    divButton.setAttribute('class', 'div_button')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')
    deleteButton.innerText = 'DELETE'

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




}

createButton.onclick = () => createTodo()
window.onkeydown = (event)=>{
    if(event.code === 'Enter'){
        createTodo()
    }
}






