const divs = document.querySelectorAll("div");
const btn = document.querySelector("button");

const nums = [];

const newRan = () => {
  for (let i = 0; i < 10; i++) {
    const rndNum = Math.random() * 100 + 1;
    const intNum = Math.floor(rndNum);
    nums[i] = intNum;
  }
};

const load = () => {
  newRan();
  for (let i = 0; i < nums.length; i++) {
    divs[i].innerText = nums[i];
  }
};

load();
btn.addEventListener("click", load);
