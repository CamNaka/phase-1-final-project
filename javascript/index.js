document.addEventListener('DOMContentLoaded', () => {
  console.log('im loaded')
  
  getItems()
  countListener()
  createForm()
  emailButton()

});
const button = document.querySelector('#buttId')
const emailForm = document.querySelector('#emailForm')


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
    <p id="nameId">${items.name}</p>
    <img src=${items.image} id="card-image" />
    <p id="item-price">${"$" + items.price + ".00"}</p>
    <button class=${items.id}>Add to cart</button>
  </div>`

  const itemSelection = document.getElementById('card-container')
  itemSelection.innerHTML += itemCard
}
const div = document.createElement('div')
div.id = 'count-id'
const counter = document.getElementById('count-id')
const num = counter.textContent

function countListener() {
  document.addEventListener('click',(event) => {
    if(event.target.classList.value === '0') {
      console.log('0 index')
      alert('Golf clubs added to shopping cart')
      
    }
    else if(event.target.classList.value === '1') {
  
      alert('Golf glove added to shopping cart')
    }
    else if(event.target.classList.value === '2'){
      
      alert('Golf shoes added to shopping cart')
    }
    else if(event.target.classList.value === '3'){
      
      alert("Tee's added to shopping cart")
    }
    else if(event.target.classList.value === '4'){
      
      alert('Golf balls added to shopping cart')
    }
    else if(event.target.classList.value === '5'){
      
      alert('Golf ball markers added to shopping cart')
    }
    else if(event.target.classList.value === '6'){
      
      alert('Divot repair tool added to shopping cart')
    }
    else if(event.target.classList.value === '7'){
      
      alert('Small towel added to shopping cart')
    }
    else if(event.target.classList.value === '8'){
      
      alert('Golf club tool added to shopping cart')
    }
  })
}


function postEmail(name, email) {
  fetch('http://localhost:3000/Golf-items', {
    method: 'POST',
    header: 
    {
    "Content-Type": "application/json",
    Accept: "application/json"
    },

    body: JSON.stringify({
      'name': name,
      'email': email
    })
  })
  .then(resp => {
    return resp.json();
  })
  .then(eachItem => {
    itemCard(eachItem);
  })
}



function createForm() {
  const formContainer = document.getElementById('email-container')
  const form = document.createElement('form')
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
    console.log(e.target)
  })

  /*
  document.addEventListener('click', (e) => {
    //e.preventDefault()
    if(e.target.name.value && e.target.email.value)
    console.log(e.target.name.value)
    alert(hi)
    postEmail(e.target.name.value, e.target.email.value)
  })*/
}
/*
document.addEventListener('click',(event) => {
  if(event.target.classList.value === '0') {
    console.log('0 index')
    alert('Golf clubs added to shopping cart')
*/