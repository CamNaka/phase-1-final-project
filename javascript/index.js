

document.addEventListener('DOMContentLoaded', () => {
  getGolfItems()
  priceListener()
  newEmails()
  restartInput()

  
  
  const clearButton = document.getElementById("clearCart")
  clearButton.addEventListener('click', (e) => {
    e.preventDefault()
    counter.textContent = 0
  })
});


function getGolfItems() {
  fetch('http://localhost:3000/Golf-items') //returns promise
    .then(resp => resp.json())//resp.json returns a promise and converts resp into json
    .then(data => { //second .then to handle the promise that the first .then returns
      data.map(eachItem => itemCard(eachItem))
      console.log(data)

      /*eachButton = json;
      console.log(eachButton)*/
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


const restartButton = document.querySelector('.restartButton')
const formName = document.querySelector('#inputName')
const formEmail = document.querySelector('#inputEmail')

function restartInput() {
  restartButton.addEventListener('click', () => {
    formName.value = ""
    formEmail.value = ""
  })
}








