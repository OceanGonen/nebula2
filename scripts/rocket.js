const toTopLink = document.querySelector(".to-top")
const rocketSection = document.querySelector(".rocket-section")

toTopLink.addEventListener("click", launching)

async function launching() {
    document.documentElement.style.setProperty('--page-height', document.body.scrollHeight + 'px') //chatGPT prompt: hoe zorg ik ervoor dat de raket altijd tot boven de pagina gaat?
    rocketSection.classList.add("launch")
    await new Promise(resolve => setTimeout(resolve, 1200)); // https://masteringjs.io/tutorials/fundamentals/wait-1-second-then
    rocketSection.classList.remove("launch")
}