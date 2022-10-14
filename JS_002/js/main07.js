/**
 * input box에 숫자를 입력하고 확인 버튼 클릭
 * 1. 입력 값이 없으면 alert("값을 입력하세요")
 * 2. 입력 값이 0 이하이면 alert("0이상을 입력하세요")
 * 3. 입력값이 0보다 크고, 100이하이면
 *      값을 제곱하여 alert
 * 4. 입력 값이 100보다 크고 200이하이면
 *    입력값 + 100을 실행하여 alert
 * 5. 입력 값이 200보다 크면
 *    입력값을 그대로 alert
 */

const inputNum = document.querySelector("#num");
const btnCalc = document.querySelector("#btn");

btnCalc.addEventListener("click", () => {
  const txtNum = inputNum.value;
  const intNum = Number(txtNum);

  if (!txtNum) {
    alert("값을 입력하세요");
  } else if (intNum <= 0) {
    // else if (txtNum <= 0)
    alert("0이상을 입력하세요");
  } else if (intNum <= 100) {
    alert(intNum ** 2);
  } else if (intNum <= 200) {
    alert(intNum + 100);
  } else {
    alert(intNum);
  }
});
