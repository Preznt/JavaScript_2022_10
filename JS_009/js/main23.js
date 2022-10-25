const mainSection = document.querySelector("section.main");
const evenSection = document.querySelector("section.even");
const oddSection = document.querySelector("section.odd");
const btnRefresh = document.querySelector("button");

const nums = [];

const makeNums = () => {
  for (let i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.random() * 100) + 1;
  }
};

const viewNums = () => {
  mainSection.textContent = "";
  nums.forEach((num) => {
    const div = document.createElement("div");
    div.textContent = num;
    mainSection.appendChild(div);
  });
};

const evenNums = () => {
  evenSection.textContent = "";
  evenSection.textContent = "짝수";
  nums.forEach((num) => {
    if (Number(num) % 2 == 0) {
      const div = document.createElement("div");
      div.textContent = num;
      evenSection.appendChild(div);
    }
  });
};

const oddNums = () => {
  oddSection.textContent = "";
  oddSection.textContent = "홀수";
  nums.forEach((num) => {
    if (Number(num) % 2 !== 0) {
      const div = document.createElement("div");
      div.textContent = num;
      oddSection.appendChild(div);
    }
  });
};

// const chkNums = () => {
//   evenSection.textContent = "";
//   evenSection.textContent = "짝수";
//   oddSection.textContent = "";
//   oddSection.textContent = "홀수";

//   nums.forEach((num) => {
//     if (Number(num) % 2 == 0) {
//       const div = document.createElement("div");
//       div.textContent = num;
//       evenSection.appendChild(div);
//     } else {
//       const div = document.createElement("div");
//       div.textContent = num;
//       oddSection.appendChild(div);
//     }
//   });
// };

const init = () => {
  makeNums();
  viewNums();
  evenNums();
  oddNums();
};

init();

btnRefresh?.addEventListener("click", init);
