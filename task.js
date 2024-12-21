const kugelnGrinch = [...document.querySelectorAll(".kugeln-grinch")]
const kugelnCindy = [...document.querySelectorAll(".kugeln-cindy")]
const grinch = document.querySelector(".hide-grinch")
const cindy = document.querySelector(".hide-cindy")
const totalCindy = document.getElementById("cindy")
const totalGrinch = document.getElementById("grinch")
const madeira = document.querySelector(".madeira-wrapper.madeira-hide")
const madeiraImg = document.querySelector(".madeira-img")
const lost = document.querySelector(".lost-wrapper.lost-hide")
const lostImg = document.querySelector(".lost-img")

function resetGame() {
  totalGrinch.textContent = 0;
  totalCindy.textContent = 0;
  grinchTitle.classList.toggle("grinch-title")
}

kugelnGrinch.forEach((kugel) => {
  kugel.addEventListener("click", (e) => {
  e.preventDefault()
    grinch.classList.toggle("hide-grinch")
       
    setTimeout(() => {
      grinch.classList.add("hide-grinch")
    }, 1000)
  totalGrinch.textContent++
    if(totalGrinch.textContent === "3") {
       lost.classList.toggle("lost-hide")
      setTimeout((lostImg.onload = () => {
        lostImg.classList.add('loaded');
    }), 3000)
    }
})
})

lostImg.addEventListener("click", () => {
    lost.classList.add("lost-hide")
   resetGame()
})

kugelnCindy.forEach((kugel) => {
  kugel.addEventListener("click", (e) => {
  e.preventDefault()
    cindy.classList.toggle("hide-cindy")
       
    setTimeout(() => {
      cindy.classList.add("hide-cindy")
    }, 1000)
    
    totalCindy.textContent++
    if(totalCindy.textContent === "3") {
      madeira.classList.toggle("madeira-hide")
      setTimeout((madeiraImg.onload = () => {
        madeiraImg.classList.add('loaded'); // Добавляем класс для активации эффекта
    }), 2000)
    }
})
})

 madeiraImg.addEventListener("click", () => {
    madeira.classList.add("madeira-hide")
   resetGame()
})

const buttonTitle = document.querySelector(".button-grinch-title")
const grinchTitle = document.querySelector(".grinch-title")

buttonTitle.addEventListener("click", (e) => {
  e.preventDefault()
  
  grinchTitle.classList.toggle("grinch-title")
})

setInterval(() => {
 buttonTitle.style.opacity = (buttonTitle.style.opacity == 0 ? 0.75 : 0), 1000
})


const kugeln = [...document.querySelectorAll(".button")]
kugeln.forEach(kugel => setInterval(() => {
 kugel.style.opacity = (kugel.style.opacity == 0.5 ? 1 : 0.5), 2000
}))