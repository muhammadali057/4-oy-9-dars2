const btnEl = document.querySelector(".btn");
const textEl = document.querySelector(".respons");

let number1 = prompt("Birinchi raqamni kiriting");
let number2 = prompt("Ikkinchi raqamni kiriting");
let qiymat = prompt("Qiymatni raqamni kiriting");

btnEl.addEventListener("click", () => {
  textEl.innerHTML = eval(number1 + qiymat + number2);
  textEl.style.marginTop = "-200px"
});
