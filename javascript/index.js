

document.addEventListener('DOMContentLoaded', () => {
  fetchGolfItems()
  //priceListener()
  newEmails()
  restartInput()

  
  
  const clearButton = document.getElementById("clearCart")
  clearButton.addEventListener('click', (e) => {
    e.preventDefault()
    totalPrice.textContent = 0
  })
});

const cardContainer = document.createElement('div')
cardContainer.id = 'cardContainer'

function fetchGolfItems() {
  fetch('http://localhost:3000/Golf-items') //returns promise
    .then(resp => resp.json())//resp.json returns a promise, handles fetch's promise and converts resp into json
    .then(data => { //second .then to handle the promise that the first .then returns
      //console.log('data:', data) //array of objects
      let itemCard = document.getElementById('cardContainer')
      data.forEach((golfItem) => (itemCard += loadGolfItem(golfItem)));
      
    });
}

const totalPrice = document.querySelector('#countId')

function loadGolfItem(golfItem) {
  const individualCard = document.createElement('div')
  individualCard.id = 'individualCard' + golfItem.id
  const allCards = document.getElementById('item-area')

  const itemName = document.createElement('h2')
  itemName.id = 'nameId'
  itemName.textContent = golfItem.name

  const itemImg = document.createElement('img')
  itemImg.id = 'cardImage'
  itemImg.src = golfItem.image

  const itemPrice = document.createElement('p')
  itemPrice.id = 'itemPrice'
  itemPrice.textContent = '$' + golfItem.price + ".00"

  const addToCartButton = document.createElement('button')
  addToCartButton.id = golfItem.id
  addToCartButton.className = 'addToCartButtonId'
  addToCartButton.textContent = 'ADD TO CART'

  addToCartButton.addEventListener('click', () => {
    alert(`${golfItem.name} were added to cart`)
    totalPrice += parseInt(totalPrice)
    
    
  })
  
  allCards.append(individualCard)
  individualCard.append(itemName, itemImg, itemPrice, addToCartButton)
}







































/*
function getGolfItems() {
  fetch('http://localhost:3000/Golf-items') //returns promise
    .then(resp => resp.json())//resp.json returns a promise, handles fetch's promise and converts resp into json
    .then(data => { //second .then to handle the promise that the first .then returns
      data.map(eachItem => itemCard(eachItem))
      console.log(data)

      
    });
}



function itemCard(items) { //div id=items.id
  const itemCard =
  `<div id="card">
    <img src=${items.image} id="card-image" />
    <p id="nameId">${items.name}</p>
    <p id="item-price">${"$" + items.price + ".00"}</p>
    <button class=${items.id}>Add to cart</button>
  </div>`

  const itemSelection = document.getElementById('card-container')
  itemSelection.innerHTML += itemCard
}



const counter = document.querySelector('#count-id')

function priceListener() {
  document.addEventListener('click',(event) => {
    if(event.target.classList.value === '0') {
      counter.textContent = parseInt(counter.innerHTML) + 600
      alert('Golf clubs added to shopping cart')
    }
    else if(event.target.classList.value === '1') {
      counter.textContent = parseInt(counter.textContent) + 15
      alert('Golf glove added to shopping cart')
    }
    else if(event.target.classList.value === '2'){
      counter.textContent = parseInt(counter.textContent) + 75
      alert('Golf shoes added to shopping cart')
    }
    else if(event.target.classList.value === '3'){
      counter.textContent = parseInt(counter.textContent) + 5
      alert("Tee's added to shopping cart")
    }
    else if(event.target.classList.value === '4'){
      counter.textContent = parseInt(counter.textContent) + 25
      alert('Golf balls added to shopping cart')
    }
    else if(event.target.classList.value === '5'){
      counter.textContent = parseInt(counter.textContent) + 5
      alert('Golf ball markers added to shopping cart')
    }
    else if(event.target.classList.value === '6'){
      counter.textContent = parseInt(counter.textContent) + 15
      alert('Divot repair tool added to shopping cart')
    }
    else if(event.target.classList.value === '7'){
      counter.textContent = parseInt(counter.textContent) + 10
      alert('Small towel added to shopping cart')
    }
    else if(event.target.classList.value === '8'){
      counter.textContent = parseInt(counter.textContent) + 15
      alert('Golf club tool added to shopping cart')
    }
  })
}
*/

const restartButton = document.querySelector('.restartButton')
const formName = document.querySelector('#inputName')
const formEmail = document.querySelector('#inputEmail')

const emailContainer = document.querySelector('#email-container')

function newEmails(){
  emailContainer.addEventListener('submit', (e) => {
    e.preventDefault()
    let object = {
      name: e.target.inputName.value,
      email: e.target.inputEmail.value
    }
    postEmail(object)

  })
}

function postEmail(object) {
  fetch('http://localhost:3000/Emails', {
    method: 'POST',
    headers: 
    {
    Accept: "application/json",
    "Content-Type": "application/json"
    },
    body:JSON.stringify(object)
  })
  .then(resp => resp.json())
  .then(eachEmail => eachEmail)
}

function restartInput() {
  emailContainer.addEventListener('click', () => {
    formName.value = ""
    formEmail.value = ""
    
  })
}







