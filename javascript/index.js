document.addEventListener('DOMContentLoaded', () => {
  console.log('im loaded')
  
  getItems()
  //countListener()
  //itemListener()
  itemClick()

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
    <button class='hi'>Add to cart</button>
  </div>`

  const itemSelection = document.getElementById('card-container')
  itemSelection.innerHTML += itemCard

}

function countListener() {
  document.addEventListener('click',(event) => {
    if(event.target.classList.value === 'ATCclass'); {
      //console.log(event.target.classList)
      
    }
  })
}

function itemListener() {
  const buttonClass = document.getElementsByClassName('1')
  buttonClass.addEventListener('click', () => {
    console.log('hi')
  })
}

function itemClick() {
  const butt  = document.getElementsByClassName('hi')
  butt.addEventListener('click', () => {
    console.log('hi')
  })
}






