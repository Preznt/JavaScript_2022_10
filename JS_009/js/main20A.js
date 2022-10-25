const h1 = document.querySelector("h1");

const nums = []; // length 가 0인 배열

for (let i = 0; i < 10; i++) {
  const rndNum = Math.random() * 100 + 1;
  const intNum = Math.floor(rndNum);
  nums[i] = intNum;
}

// nums.forEach((num) => {
//   const rndNum = Math.random() * 100 + 1;
//   const intNum = Math.floor(rndNum);
//   num = intNum;
// });

nums.forEach((num) => {
  document.writeln(num);
});

nums.forEach((num) => {
  // h1.textContent = h1.textContent + num
  h1.textContent += `${num} `;
});
