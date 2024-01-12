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
const angleDown = document.getElementById('fa-angle-down')

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

const am = document.getElementById('am')
const pm = document.getElementById('pm')

let children = timeHalf.children

for (let i = 0; i < children.length; i++) {
    let copilIterat = children[i]
    copilIterat.addEventListener('click', () => {
        amPm.childNodes[0].nodeValue = copilIterat.textContent
        timeHalf.classList.add('hide')
        angleDown.style.transform = 'rotate(0deg)'
    })
}

const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const numarPersoane = document.getElementById('number-people')

function getNumberOfPeople(numar) {
    numberPeopleArray = numar.split(' ')
    let numarPersoanePrezente = parseInt(numberPeopleArray[0])
    return numarPersoanePrezente
}

minus.addEventListener('click', (e) => {
    e.preventDefault()
    let numarPers = getNumberOfPeople(numarPersoane.textContent)
    if (numarPers === 1) {
        numarPersoane.textContent = `${numarPers} people`
    }
    else {
        numarPersoane.textContent = `${numarPers - 1} people`
    }
})

plus.addEventListener('click', (e) => {
    e.preventDefault()
    let numarPers = getNumberOfPeople(numarPersoane.textContent)
    numarPersoane.textContent = `${numarPers + 1} people`
})

const btnRezervare = document.querySelector("#reservation")
btnRezervare.addEventListener("click",(e)=>{
    e.target.preventDefault()
})