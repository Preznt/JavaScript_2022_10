const hi = document.querySelector("#hi");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", () => {
  hi.style.backgroundColor = "Red";
});

btn2.addEventListener("click", () => {
  hi.style.backgroundColor = "Blue";
});

btn3.addEventListener("click", () => {
  hi.style.backgroundColor = "Yellow";
});
