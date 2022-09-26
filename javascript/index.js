document.addEventListener('DOMContentLoaded', () => {
  console.log('im loaded')
  
  getItems()
  countListener()
  createForm()
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

      
    }
    else if(event.target.classList.value === '1') {
      console.log('im the other 1 index')
      //need to add price of item to counter when clicked
    }
    else if(event.target.classList.value === '2'){
      console.log('im the other 2 index')
    }
    else if(event.target.classList.value === '3'){
      console.log('im the other 3 index')
    }
    else if(event.target.classList.value === '4'){
      console.log('im the other 4 index')
    }
    else if(event.target.classList.value === '5'){
      console.log('im the other 5 index')
    }
    else if(event.target.classList.value === '6'){
      console.log('im the other 6 index')
    }
    else if(event.target.classList.value === '7'){
      console.log('im the other 7 index')
    }
    else if(event.target.classList.value === '8'){
      console.log('im the other 8 index')
    }
  })
}


function postNewMonster(name, email) {
  fetch('http://localhost:3000/Emails', {
    method: 'POST',
    header: {
    "Content-Type": "application/json",
    Accept: "application/json"
    },

    body: {
      name, email
    }

  })
  .then(resp => resp.json())
  .then(eachItem => console.log(eachItem))
    
}



function createForm() {
  const formContainer = document.getElementById('email-container')
  const form = document.createElement('form')

  form.id = 'emailForm'

  const nameInput = document.createElement('input')
  const nameId = nameInput.setAttribute('id', 'nameId')
  nameInput.setAttribute('placeholder', 'Name...')

  const emailInput = document.createElement('input')
  const emailId = emailInput.setAttribute('id', 'emailId')
  emailInput.setAttribute('placeholder', 'Email...')

  

  const createButton = document.createElement('button')
  createButton.textContent = 'Create'

  

  form.append(nameInput, emailInput, createButton)
  formContainer.append(form)
}