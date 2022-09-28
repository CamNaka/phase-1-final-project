document.addEventListener('DOMContentLoaded', () => {
  console.log('im loaded')
  
  getItems()
  countListener()
  createForm()
  emailButton()
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


function countListener() {
  document.addEventListener('click',(event) => {
    if(event.target.classList.value === '0') {
      counter.textContent = parseInt(counter.textContent) + 600
      
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


const button = document.querySelector('#buttId')
const emailForm = document.querySelector('#emailForm')

function createForm() {
  const formContainer = document.getElementById('email-container')
  const form = document.createElement('div')
  const formId = form.setAttribute('id', 'emailForm')
  
  const nameInput = document.createElement('input')
  nameInput.setAttribute('id', 'nameId')
  nameInput.setAttribute('placeholder', 'Name...')

  const emailInput = document.createElement('input')
  emailInput.setAttribute('id', 'emailId')
  emailInput.setAttribute('placeholder', 'Email...')

  const createButton = document.createElement('button')
  createButton.setAttribute('class', 'buttId')
  createButton.textContent = 'Submit'

  form.append(nameInput, emailInput, createButton)
  formContainer.append(form)

}


function emailButton() {
  document.addEventListener('click', (e)=> {
    e.preventDefault()
    if(e.target.classList.value === 'buttId') {
      const names = document.getElementById('nameId')
      console.log(e.target.names.value, 'hi')
      //postEmail(e.target.name.value, e.target.email.value)
    }
  })
}


function postEmail(name, email) {
  fetch('http://localhost:3000/Emails', {
    method: 'POST',
    header: {
    "Content-Type": "application/json",
    //Accept: "application/json"
    },
    body:JSON.stringify(name, email)
  })
  .then(resp => resp.json())
  .then(eachItem => console.log(eachItem))
}