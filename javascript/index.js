document.addEventListener('DOMContentLoaded', () => {
  console.log('im loaded')
  getItems()
  clickListener()

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
}

function clickListener() {
  document.addEventListener('click', (event) => {
    if (event.target.classList.value === 'ATCclass') {
      console.log('you found me')
      alert('Item was added to cart')
    }
  })
}


function counter() {
  const createCnt = document.createElement('h3')
  createCnt.setAttribute('id', 'counterId')
  counter-form.appendChild('createCnt')
}
