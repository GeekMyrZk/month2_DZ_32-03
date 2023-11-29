//Riddles
const buttons = document.querySelectorAll('button')


const showAnswer = function () {
    const riddle = this.closest('.riddle')
    const answer = riddle.querySelector('.answer')

    answer.classList.toggle('hide')

    this.innerText = answer.classList.contains('hide') ? 'Show answer' : 'Hide answer'
}

buttons.forEach(function (button) {
    button.addEventListener('click', showAnswer)
})

