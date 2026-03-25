const toTopLink = document.querySelector(".to-top")
const rocketSection = document.querySelector(".rocket-section")
var countdown = new Audio('sounds/countdown.mp3')
var launch = new Audio('sounds/launch.mp3')

toTopLink.addEventListener("click", launching)

async function launching(e) {
    e.preventDefault()
    document.documentElement.style.setProperty('--page-height', document.body.scrollHeight + 'px')

    countdown.currentTime = 0
    countdown.play()
    await new Promise(resolve => {
        countdown.onended = resolve;  //chatGPT prompt: how can i set a timeout so the class is added after a while?
    });

    rocketSection.classList.add("launch")
    launch.play();
    window.scrollTo({ top: 0, behavior: 'smooth' })
    await new Promise(resolve => setTimeout(resolve, 2500))
    rocketSection.classList.remove("launch")
}