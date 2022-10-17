const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const btnCalc = document.querySelector("button");

inputNum1.focus();

btnCalc.addEventListener("click", () => {
  const txtInput1 = inputNum1.value;
  const txtInput2 = inputNum2.value;
  const intInput1 = Number(txtInput1);
  const intInput2 = Number(txtInput2);

  // 아래와같이 가져올때는 querySelectorALL로 가져와야한다
  // 난 ALL로 안가져왔다..
  const spans = document.querySelectorAll("span");

  // Q. input 태그에 정수만 입력할 수 있게 하려면 어떻게 해야할까
  if (!txtInput1) {
    alert("num1을 입력하세요");
    return;
  }

  if (!txtInput2) {
    alert("num2를 입력하세요");
    inputNum2.focus();
    return;
  }

  spans[0].innerText =
    txtInput1 + " + " + txtInput2 + " = " + (intInput1 + intInput2);
  spans[1].innerText =
    txtInput1 + " - " + txtInput2 + " = " + (intInput1 - intInput2);
  spans[2].innerText =
    txtInput1 + " * " + txtInput2 + " = " + intInput1 * intInput2;
  spans[3].innerText =
    txtInput1 + " ÷ " + txtInput2 + " = " + intInput1 / intInput2;
});
