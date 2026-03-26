window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body")

  // sounds
  const glitchSelectors = "label, polygon"
  var glitch = new Audio("sounds/glitchy-pop.mp3")
  var bgMusic = new Audio("sounds/background.mp3")

  document.querySelectorAll(glitchSelectors).forEach(el => {
    el.addEventListener('click', () => {
      glitch.currentTime = 0
      glitch.play()
    })
  })

  bgMusic.loop = true
  bgMusic.volume = 1
  bgMusic.play().catch(e => {
      console.log("Autoplay prevented:", e)
  })

  // cursor
  const cursor = document.querySelector(".cursor")

  document.addEventListener("mousemove", (e) => {
    let x = e.clientX
    let y = e.clientY
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
  });

  document.querySelectorAll("*").forEach(el => {
    el.style.cursor = "none"
  });

  document.addEventListener("mouseover", (e) => {
    if (e.target.matches("a, button, label, polygon, .values span, div.rocket *")) {
      cursor.classList.add("cursor-hover")
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.matches("a, button, label, polygon, .values span, div.rocket *")) {
      cursor.classList.remove("cursor-hover")
    }
  });

})