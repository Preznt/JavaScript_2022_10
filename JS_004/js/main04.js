const content = document.querySelector("#content");
const btnRed = document.querySelector("#btnRed");
const btnBlue = document.querySelector("#btnBlue");
const btnYellow = document.querySelector("#btnYellow");

const colors = ["red", "blue", "yellow"];
const colorChange = (index) => {
  content.style.backgroundColor = colors[index];
};

btnRed.addEventListener("click", () => {
  colorChange(0);
});
btnBlue.addEventListener("click", () => {
  colorChange(1);
});
btnYellow.addEventListener("click", () => {
  colorChange(2);
});
/**
 * addEventListener안에 함수는 ()를 쓰지 않는데 위처럼 쓸떄는
 * 다시 함수로 감싸주어야함 index에 0을 넣어줘야하므로
 */
