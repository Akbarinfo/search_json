let elList = document.querySelector('#listbox')
let elInput = document.querySelectorAll('.search__input')

// inputlar
let elInputId = document.querySelector('#id')
let elInputEm = document.querySelector('#email')
let elInputNam = document.querySelector('#name')

function addDisplay(e) {
  let li = document.createElement('li')
  li.className = 'search__item'
  li.innerHTML = `
    <span class="search__id">
    <b>ID:</b> ${e.id}
    </span>
    <h3 class="search__id"><b>Name:</b> ${e.name}</h3>
    <p class="search__text">${e.body}</p>
    <span class="search__id">
    <b>Email:</b> ${e.email}
    </span>
    `
  elList.appendChild(li)
}

function windo() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item, index) => {
        if (index < 10) {
          addDisplay(item)
        }
      })
    })
}

elInput.forEach(item => {
  item.addEventListener('focusout', (e) => {
    e.preventDefault()
    windo()
    elList.innerHTML = null
    item.value = null
  })
})
windo()

//Search part
elInput.forEach(item => {
  item.addEventListener('keyup', (e) => {
    e.preventDefault()
    let id = e.target.id
    let value = e.target.value
    console.log(e.target.value)
    console.log(e.target.id)
    elList.innerHTML = null
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          if(id == 'id') {
            if(item.id == elInputId.value) {
              addDisplay(item)
            }
          }
          if(id == 'email') {
            if(item.email == elInputEm.value) {
              addDisplay(item)
            }
          }
          if (id == 'name') {
            if(item.name == elInputNam.value) {
              addDisplay(item)
            }
          }
        })
      })
  })
})
