/**
 * input box 에 이름, 주소, 전화번호를 입력하면
 * 화면의 span tag 의 해당 위치에 확인 값을
 * 출력하기
 */

const inputs = document.querySelectorAll("input");
const btnOk = document.querySelector("button.btn_ok");
const spans = document.querySelectorAll("span");

const info = {};
const index = {
  이름: 0,
  주소: 1,
  전화번호: 2,
};

btnOk?.addEventListener("click", () => {
  info.이름 = inputs[0].value;
  info.주소 = inputs[1].value;
  info.전화번호 = inputs[2].value;

  spans[index.이름].innerText = info.이름;
  spans[index.주소].innerText = info.주소;
  spans[index.전화번호].innerText = info.전화번호;

  //   sapns[index.이름].innerText = inputs[index.이름].value;
  //   sapns[index.주소].innerText = inputs[index.주소].value;
  //   sapns[index.전화번호].innerText = inputs[index.전화번호].value;
});
