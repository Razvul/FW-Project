const listaButoane = document.querySelectorAll('button')
listaButoane.forEach(buton => {

    buton.addEventListener('click', () => {
        window.location = 'index2.html'
    })
})

function createBurger(burger) {
    for (let i = 0; i < 6; i++) {
        const linie = document.createElement('div')
        linie.classList.add('linie')
        burger.appendChild(linie)
    }
}
const burger = document.getElementById("burger1")
createBurger(burger)

const timeHalf = document.getElementById("select-time-half")
const amPm = document.getElementById('am-pm')
const angleDown=document.getElementById('fa-angle-down')


amPm.addEventListener('click', () => {
    if (timeHalf.classList.contains('hide')) {
        timeHalf.classList.remove('hide')
        angleDown.style.transform = 'rotate(180deg)'
    }
    else {
        timeHalf.classList.add('hide')
        angleDown.style.transform = 'rotate(0deg)'
    }
})

