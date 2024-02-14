header = document.querySelector('header')

window.addEventListener('scroll', event => {
    this.scrollY > 10 ? header.classList.add("sticky") : header.classList.remove("sticky")
})

// Скрыть / Показать меню
let showMenu = () => {
    header.classList.toggle('menu')
}