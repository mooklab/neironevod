header = document.querySelector('header')
logotype = header.querySelector('a.logotype')
how = document.querySelector('section.how div.other')
buttons = document.querySelectorAll('button, a.button')

window.addEventListener('scroll', event => {
    this.scrollY > 10 ? header.classList.add("sticky") : header.classList.remove("sticky")
})

// Скрыть / Показать меню
let showMenu = () => {
    header.classList.toggle('menu')
}

let inactivityTime = () => {
    let time

    document.addEventListener('mousemove', resetTimer)
    document.addEventListener('keypress', resetTimer)

    function resetTimer() {
        if( !logotype.classList.contains('sad') && !logotype.classList.contains('happy')) {
            logotype.classList.remove('brrr')
            logotype.classList.remove('haqppy')
            logotype.classList.remove('sad')
            logotype.classList.add('standart')
        }
        clearTimeout(time)
        time = setTimeout(fn, 2000)
    }

    function fn() {
        if( !logotype.classList.contains('sad') && !logotype.classList.contains('happy')) {
            logotype.classList.remove('sad')
            logotype.classList.remove('happy')
            logotype.classList.remove('standart')
            logotype.classList.add('brrr')
        }
    }
}
  
document.addEventListener('DOMContentLoaded', () => {
    inactivityTime()
})

how.addEventListener('mouseenter', () => {
    logotype.classList.remove('brrr')
    logotype.classList.remove('standart')
    logotype.classList.add('sad')
})

how.addEventListener('mouseleave', () => {
    logotype.classList.remove('brrr')
    logotype.classList.remove('sad')
    logotype.classList.add('standart')
})

buttons.forEach( button => {
    button.addEventListener('mouseenter', () => {
        logotype.classList.remove('brrr')
        logotype.classList.remove('standart')
        logotype.classList.remove('sad')
        logotype.classList.add('happy')
    })
    button.addEventListener('mouseleave', () => {
        logotype.classList.remove('brrr')
        logotype.classList.add('standart')
        logotype.classList.remove('sad')
        logotype.classList.remove('happy')
    })
})