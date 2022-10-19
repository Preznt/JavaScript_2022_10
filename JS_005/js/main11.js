/**
 *1.이름, 주소, 전화번호를 입력한 후 추가 버튼을 클릭하면
 *  입력된 이름, 주소, 전화번호를 table 에 추가
 * 2. 화면의 UI를 각자 디자인
 */

const btn = document.querySelector("button");
const tbody = document.querySelector("tbody.addr");
const inputs = document.querySelectorAll("input");

btn.addEventListener("click", () => {
  const tr = document.createElement("TR");
  let td = document.createElement("TD");

  //   td.innerText = inputs[0].value;
  //   tr.appendChild(td);

  //   td = document.createElement("TD");
  //   td.innerText = inputs[1].value;
  //   tr.appendChild(td);

  //   td = document.createElement("TD");
  //   td.innerText = inputs[2].value;
  //   tr.appendChild(td);

  for (let i = 0; i < inputs.length; i++) {
    td = document.createElement("TD");
    td.innerText = inputs[i].value;
    tr.appendChild(td);
  }

  tbody.appendChild(tr);
});
