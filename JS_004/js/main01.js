const content = document.querySelector("#content");
const btnRed = document.querySelector("#btnRed");
const btnBlue = document.querySelector("#btnBlue");
const btnYello = document.querySelector("#btnYellow");

btnRed?.addEventListener("click", () => {
  content.style.backgroundColor = "red";
});

btnBlue?.addEventListener("click", () => {
  content.style.backgroundColor = "Blue";
  content.style.color = "white";
});

btnYello?.addEventListener("click", () => {
  content.style.backgroundColor = "Yellow";
});
