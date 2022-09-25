document.addEventListener('DOMContentLoaded', () => {
  console.log('im loaded')
  
  getItems()
  countListener()
  

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

function countListener() {
  document.addEventListener('click',(event) => {
    if(event.target.classList.value === '2') {
      //console.log(event.target.classList)
      console.log('im 2')
    }
  })
}






