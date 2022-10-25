const num = [];

for (let i = 0; i < 10; i++) {
  const rndNumber = Math.floor(Math.random() * 100) + 1;
  num.push(rndNumber);
  //   num[i] = Math.floor(Math.random() * 100) + 1;
}

num.forEach((input) => {
  document.write(`${input}, `);
});
