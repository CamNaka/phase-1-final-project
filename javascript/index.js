document.addEventListener('DOMContentLoaded', () => {
  getItems()
  countListener()
  //createForm()

  newEmail()

  const clearButton = document.getElementById("clearCart")
  clearButton.addEventListener('click', () => {
    counter.textContent = 0
  })

});


function getItems() {
  fetch('http://localhost:3000/Golf-items')
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      data.map(eachItem => itemCard(eachItem))
      //console.log(data)
    });
}


function itemCard(items) {
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


const div = document.createElement('div')
div.id = 'count-id'
const counter = document.querySelector('#count-id')
const num = counter.textContent

function countListener() {
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

/*
const button = document.querySelector('#buttId')
const emailForm = document.querySelector('#emailForm')
function createForm() {
  const formContainer = document.getElementById('email-container')
  const form = document.createElement('div')
  const formId = form.setAttribute('id', 'emailForm')
  
  const nameInput = document.createElement('input')
  nameInput.setAttribute('id', 'emailNameId')
  nameInput.setAttribute('placeholder', 'Name...')

  const emailInput = document.createElement('input')
  emailInput.setAttribute('id', 'emailId')
  emailInput.setAttribute('placeholder', 'Email...')

  const createButton = document.createElement('button')
  createButton.setAttribute('id', 'buttId')
  createButton.textContent = 'Submit'

  form.append(nameInput, emailInput, createButton)
  formContainer.append(form)

}*/

//let name = document.getElementById('emailNameId').value 
//let email = document.getElementById('emailId').value 





const doc = document.querySelector('#email-container')

function newEmail() {
  doc.addEventListener('submit',(e) => {
    e.preventDefault()
    postEmail(e.target.inputName.value, e.target.inputEmail.value)
  })
}




//const namesCap = document.getElementById('input-name').value
//const emailsCap = document.getElementById('input-email').value

function postEmail(inputName, inputEmail) {
  fetch('http://localhost:3000/Emails', {
    method: 'POST',
    header: 
    {
    "Content-Type": "application/json",
    Accept: "application/json"
    },

    body: JSON.stringify({
      "name": inputName,
      "email": inputEmail
    })
  })
  .then(resp => {
    return resp.json();
  })
  .then(eachItem => {eachItem})
}



