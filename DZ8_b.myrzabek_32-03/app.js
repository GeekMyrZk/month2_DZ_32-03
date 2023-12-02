const box = document.querySelector('.box')
const colorText = document.querySelector('.text')

box.onclick = () => {
    const color = Math.floor(Math.random() * 1677721)
    colorText.classList.remove('hide')
    box.style.backgroundColor = '#' + color
    colorText.innerText = '#' + color
}
