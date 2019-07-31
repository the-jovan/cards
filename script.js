const initialRotation = [0, -1, -2, -3, -4, -5, -6, -7]

const cards = Object.values(document.querySelectorAll('.card'))

for ( let i = 0; i < initialRotation.length; i++) {
  cards[i].style.transform = `rotate(${initialRotation[i]}deg)`
  cards[i].onclick = () => rotate(cards.indexOf(cards[i]))
}


function rotate(index) {
  let delta = 165;

  cards.forEach((item, ind) => { 
  if (ind < index) {
    item.style.transform = `rotate(${delta}deg)`
    delta -= 10
  } else if (ind == index) {
    delta = 0
    item.style.transform = `rotate(${delta}deg)`
    delta =- 10
  } else {
    item.style.transform = `rotate(${delta}deg)`
    delta-=10
  }
})
  
}
