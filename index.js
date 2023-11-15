const articole = [
    {
        img: './Imagini/Article1.png',
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
    listaArticole.forEach(element => {
        createArticle(element)
    })
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

const container4 = document.querySelector("#container4")

function createContainer(eveniment) {
    const container = document.createElement('div')

    const img = document.createElement('img')
    img.setAttribute('src', eveniment.img)
    img.setAttribute('alt', eveniment.alt)
    container.appendChild(img)

    const booking = document.createElement('div')
    const text = document.createElement('div')

    const h2 = document.createElement('h2')
    h2.textContent = eveniment.title
    text.appendChild(h2)

    const p = createElement('p')
    p = textContent = eveniment.description
    text.appendChild(p)

    const buton = document.createElement('button')
    buton.textContent = 'book a table'

    const grupEvents = document.createElement('div')
    const grupLinii = document.createElement('div')

    const linie = document.createElement('div')

}