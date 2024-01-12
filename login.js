const inputNume = document.querySelector("#nume")
const inputParola = document.querySelector("#nume")
const inputEmail = document.querySelector("#nume")
const buttonSubmit = document.getElementById("submit")

const infoUser = {}

function verificaUserName(name) {
    let rezultat = ''
    if (name.length <= 3) {
        rezultat = 'Numele utilizatorului este prea mic'
    }
    else {
        rezultat = 'Numele utilizatorului este destul de mare'
    }
    return rezultat
}

function verificaUserParola(parola) {
    let rezultat = ''
    let carcatereSpeciale = 0
    for (let i = 0; i < parola.length; i++) { // filter sa scot a..z A..Z 0..9
        if (!(parola[i] >= 'a' && parola[i] <= 'z') && !(parola[i] >= 'A' && parola[i] <= 'Z') && !(parola[i] >= '0' && parola[i] <= '9') && parola[i] != ' ') {
            carcatereSpeciale++
        }
    }

    if (parola.length <= 8) {
        rezultat += 'Parola este prea mica. '
    }
    else {
        rezultat += 'Parola este destul de lunga. '
    }

    if (carcatereSpeciale > 0) {
        rezultat += 'Parola contine caractere speciale. '
    }
    else {
        rezultat += 'Parola NU contine caractere speciale. '
    }
    return rezultat
}

function verificaUserEmail(email) {
    let rezultat = ''
    let areArond = false
    let arePunct = false

    // if (email.length < 1) return 

    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            areArond = true
        }
        if (email[i] === '.') {
            arePunct = true
        }
    }
    if (areArond && arePunct) {
        let emailArray = email.split('')
        let indexArond = emailArray.findIndex(elem => {
            return elem === '@'
        })
        let indexPunct = emailArray.findIndex(elem => {
            return elem === '.'
        })

        if (indexPunct - indexArond > 1) {
            rezultat += 'Adresa de email este corecta. '
        }
        else {
            rezultat += 'Adresa de email este gresita. '
        }
    }
    else {
        rezultat += 'Adresa de email este gresita. '
    }
    return rezultat
}

inputNume.addEventListener("click", (e) => {
    infoUser.nume = e.target.value
})

inputParola.addEventListener('click', (e) => {
    infoUser.parola = e.target.value
})

inputEmail.addEventListener('click', (e) => {
    infoUser.email = e.target.value
})

const rezultatUser = document.getElementById('result')
buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    rezultatUser.innerHTML = ''
    console.log(infoUser)

    const nume = document.createElement('p')
    nume.textContent = verificaUserName(infoUser.nume)
    rezultatUser.appendChild(nume)

    const parola = document.createElement('p')
    parola.textContent = verificaUserParola(infoUser.parola)
    rezultatUser.appendChild(parola)

    const email = document.createElement('p')
    email.textContent = verificaUserEmail(infoUser.email)
    rezultatUser.appendChild(email)
})