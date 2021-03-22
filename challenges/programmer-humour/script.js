function getProgrammerHumour() {
    fetch('https://xkcd.now.sh/?comic=latest')
        .then(res => res.json())
        .then(data => showCard(data))
        .catch(err => console.log('No jokes today' + err))
}

let cardTitle = document.querySelector('#cardTitle');
let cardText = document.querySelector('#cardText');
let imgEl = document.querySelector('#imgEl');

function showCard(data) {
    cardTitle.innerText = data.title;
    cardText.innerText = data.alt;
    imgEl.src = data.img;
}

let getData = document.querySelector('#getHumour');
getData.addEventListener('click', getProgrammerHumour)
