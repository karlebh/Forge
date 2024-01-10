
const dropDown = document.querySelector('#dropDown')
const open = document.querySelector('.open')
const close = document.querySelector('.close')

const priceSwitch = document.querySelector('.switch input[type=checkbox]')
const prices = document.querySelectorAll('.price h1')

open.onclick = function () {
  open.classList.toggle('hide')
  close.classList.toggle('hide')

  dropDown.classList.remove('hide')
  dropDown.classList.add('flex')
}

close.onclick = function () {
  open.classList.toggle('hide')
  close.classList.toggle('hide')

  dropDown.classList.add('hide')
  dropDown.classList.remove('flex')
}

priceSwitch.onchange = () => {
  prices.forEach((price) => {

    if (priceSwitch.checked) {
      let remainder = price.textContent.replace('$', ' ') % 10
      if (remainder !== 9) {
        price.textContent = price.textContent + '0'
      } else {
        price.textContent = price.textContent + remainder
      }
    } else {
      price.textContent = price.textContent.slice(0, -1)
    }


  })

}


window.addEventListener('DOMContentLoaded', function () {
  this.document.querySelector('.time').textContent = new Date().getFullYear()
})
