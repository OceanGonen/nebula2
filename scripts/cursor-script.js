const body = document.querySelector("body")
const cursor = document.querySelector(".cursor");

// Position cursor div to cursor position
document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

document.querySelectorAll("*").forEach(el => {
  el.style.cursor = "none";
});

document.addEventListener("mouseover", (e) => {
  if (e.target.matches("a, button, label, polygon, .values span, div.rocket *")) {
    cursor.classList.add("cursor-hover");
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.matches("a, button, label, polygon, .values span, div.rocket *")) {
    cursor.classList.remove("cursor-hover");
  }
});