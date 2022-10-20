const inputs = document.querySelectorAll("input");
const btnOk = document.querySelector("button.btn_ok");
const tbody = document.querySelector("tbody.tbody_add");

const inputCheck = () => {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const holderText = inputs[i].placeholder;
    if (!input.value) {
      alert(`${holderText}을 입력해주세요`);
    } else {
      continue;
    }
    input.value = "";
    input.focus();
    return false;
  }
  return true;
};

const tableInput = () => {
  const tr = document.createElement("TR");
  for (let i = 0; i < inputs.length; i++) {
    let td = document.createElement("TD");
    td.innerText = inputs[i].value;
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
};

btnOk.addEventListener("click", () => {
  if (inputCheck()) {
    tableInput();
  }
});
