const inputNum = document.querySelector("#num");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  //
  const txtNum = inputNum.value;
  const intNum = Number(txtNum);
  // input box 에 입력된 숫자가 0이면
  // 0보다 큰 수를 입력하세요 라고 alert 보이기

  // if (Number(txtNum === 0)) {
  if (intNum <= 0) {
    alert("0보다 큰 값을 입력하세요");
  }
  /**
   * 숫자일 경우 범위를 검사하는 방법
   *
   * intNum 변수 값이 0 이상 :
   *    intNum >= 0, 0 <= intNum
   * intNum 변수 값이 100 이하 :
   *    intNum <= 100
   * intNum 변수 값이 0 보다 큰 :
   *    intNum > 0
   * intNum 변수 값이 100보다 작은 :
   *    intNum < 100
   * 이런 아이들을 비교연산자라고 한다
   * 참이면 true 아니면 false가 나온다
   */
});
