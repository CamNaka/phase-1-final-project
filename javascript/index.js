document.addEventListener('DOMContentLoaded', () => {
  console.log('im loaded')
  getItems()
  //countListener()
  //testIdOne()

  
});


function getItems() {
  fetch('http://localhost:3000/Golf-items')
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      data.map(eachItem => itemCards(eachItem))
      //console.log(data)
    })
}

function itemCards(items) {
  const itemCards =
    `<div id="card">
    <p id="nameId">${items.name}</p>
    <img src=${items.image} id="card-image" />
    <p id="item-price">${"$" + items.price + ".00"}</p>
    <button class="ATCclass">Add to cart</button>
  </div>`

  const itemSelection = document.getElementById('card-container')
  itemSelection.innerHTML += itemCards
  
  document.addEventListener('click', (event) => {
    if (event.target.classList.value === 'ATCclass') {
      console.log(items.id)
      //alert('Item was added to cart')
      
    }
  })
}

/*
function countListener() {
  document.addEventListener('click', (event) => {
    if (event.target.classList.value === 'ATCclass') {
      console.log(items.price)
      //alert('Item was added to cart')
      items.price
    }
  })
}
*/

function second() {
  const click = document.getElementById('ATCclass')

  click.addEventListener('click', () => {
    console.log('got me')
  })
}

function testIdOne() {
  document.addEventListener('click', (event)=> {
    if(event.target.classList.te === 1) {
      console.log('got it')
    }
  })
}