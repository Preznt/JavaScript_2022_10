const btn = document.querySelector("button.add");
const inputs = document.querySelectorAll("input");
const tbody = document.querySelector("tbody.score");

let score = [];

const localLoad = () => {
  const addrLoad = localStorage.getItem("scores");
  score = JSON.parse(addrLoad);
  if (!score) {
    score = [];
    return false;
  }

  for (let i = 0; i < score.length; i++) {
    const tr = document.createElement("TR");
    let td = document.createElement("TD");
    td.textContent = score[i].class;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = score[i].name;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = score[i].kor;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = score[i].eng;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = score[i].math;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = score[i].score;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = score[i].avg;
    tr.appendChild(td);

    tbody.appendChild(tr);
  }
};

localLoad();

const inputCheck = () => {
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      alert(`${inputs[i].placeholder}을(를) 입력해주세요`);
    } else {
      continue;
    }
    inputs[i].focus();
    return false;
  }
  return true;
};

const localInput = () => {
  let sum = 0;
  const tr = document.createElement("TR");

  inputs.forEach((input) => {
    let td = document.createElement("TD");
    td.innerText = input.value;
    tr.appendChild(td);

    if (input.name !== "sc_num" && input.name !== "sc_name") {
      sum += Number(input.value);
    }

    // for (let i = 2; i < 5; i++) {
    //   sum += Number(inputs[i].value);
    // }
    // 이거는 let sum = 0 을 forEach문 안으로 넣어줘야한다
    // 하지만 sum을 밖에서 사용할 수 없으므로 if문을 사용해주는게 맞다
  });

  const addr = {
    class: inputs[0].value,
    name: inputs[1].value,
    kor: inputs[2].value,
    eng: inputs[3].value,
    math: inputs[4].value,
    score: sum,
    avg: Math.floor(sum / 3),
  };

  score.push(addr);

  localStorage.setItem("scores", JSON.stringify(score));

  let td = document.createElement("TD");
  td.innerText = sum;
  tr.appendChild(td);

  td = document.createElement("TD");
  td.innerText = Math.floor(sum / 3);
  tr.appendChild(td);

  tbody.appendChild(tr);

  inputs.forEach((input) => {
    input.value = "";
  });

  inputs[0].focus();
};

btn?.addEventListener("click", () => {
  if (inputCheck()) {
    localInput();
  }
});
