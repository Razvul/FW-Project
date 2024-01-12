const articole = [
    {
        img: './Imagini/Article1 Phone.jpg',
        alt: 'Seared Salmon Filet',
        title: 'Seared Salmon Filet',
        description: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
    },
    {
        img: './Imagini/Article2.png',
        alt: 'Rosamary Filet Mignon',
        title: 'Rosamary Filet Mignon',
        description: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
    },
    {
        img: './Imagini/Article3.png',
        alt: 'Summer Fruit Chocolate Mousse',
        title: 'Summer Fruit Chocolate Mousse',
        description: 'Creamy mousse combined with summer fruits and dark chocolate shavings',
    },
]

const articleList = document.querySelector('#listaArticole')

function createArticle(articol) {
    const article = document.createElement("article")

    const img = document.createElement('img')
    img.setAttribute('src', articol.img)
    img.setAttribute('alt', articol.alt)

    const div = document.createElement("div")

    const h4 = document.createElement("h4")
    h4.textContent = articol.title

    const p = document.createElement('p')
    p.textContent = articol.description

    div.appendChild(h4)
    div.appendChild(p)

    article.appendChild(img)
    article.appendChild(div)

    articleList.appendChild(article)
}

function createArticleList(listaArticole) {
    listaArticole.forEach(createArticle)
}

createArticleList(articole)


const evenimente = [
    {
        img: './Imagini/FamilyGathering.png',
        alt: 'Family Gathering',
        title: 'Family Gathering',
        description: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.",
    },
    {
        img: './Imagini/SpecialEvents.png',
        alt: 'Special Events',
        title: 'Special Events',
        description: "Weather it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.",
    },
    {
        img: './Imagini/SocialEvents.png',
        alt: 'Social Events',
        title: 'Social Events',
        description: "Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.",
    },
]

const img2 = document.getElementById("img2")
const h2 = document.getElementById("c4-h2")
const paragraf = document.getElementById("c4-p")

const ancora1 = document.getElementById("ancora1")
const ancora2 = document.getElementById("ancora2")
const ancora3 = document.getElementById("ancora3")

const linie1 = document.querySelector("#linie-event1")
const linie2 = document.querySelector("#linie-event2")
const linie3 = document.querySelector("#linie-event3")

ancora1.addEventListener('click', () => {
    img2.setAttribute('src', evenimente[0].img)
    img2.setAttribute('alt', evenimente[0].alt)

    h2.textContent = evenimente[0].title
    paragraf.textContent = evenimente[0].description

    linie1.classList.add('color')
    linie2.classList.remove('color')
    linie3.classList.remove('color')
})

ancora2.addEventListener('click', () => {
    img2.setAttribute('src', evenimente[1].img)
    img2.setAttribute('alt', evenimente[1].alt)

    h2.textContent = evenimente[1].title
    paragraf.textContent = evenimente[1].description

    linie1.classList.remove('color')
    linie2.classList.add('color')
    linie3.classList.remove('color')
})

ancora3.addEventListener('click', () => {
    img2.setAttribute('src', evenimente[2].img)
    img2.setAttribute('alt', evenimente[2].alt)

    h2.textContent = evenimente[2].title
    paragraf.textContent = evenimente[2].description

    linie1.classList.remove('color')
    linie2.classList.remove('color')
    linie3.classList.add('color')
})


const burger1 = document.getElementById("burger1")
const burger2 = document.getElementById("burger2")
function createBurger(burger) {
    for (let i = 0; i < 6; i++) {
        const linie = document.createElement('div')
        linie.classList.add('linie')
        burger.appendChild(linie)
    }
}
// createBurger(burger1)
createBurger(burger2)