const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const spanSum = document.querySelector("#sum");

const btnCacl = document.querySelector("button");

btnCacl?.addEventListener("click", () => {
  const num1 = inputNum1.value;
  const num2 = inputNum2.value;

  spanSum.innerText = Number(num1) + Number(num2);
  /**
   * Q. 왜 num1 + num2 의 결과가 이상하게 나오는지 알아오기
   *   :input 박스에 있는 것은 모두 문자이기 때문에 연산을 하기 위해서는
   *    문자를 숫자로 바꿔줘야한다
   *    자바스크립트에서 문자를 숫자로 바꾸는 방법은 여러가지 방법이 있다
   *    1. Number() 함수 이용하기
   *    2. ParseInt() 함수 이용하기 -> 인자로 전달된 문자열을 정수의 Number로 변환
   *    3. ParseFloat() 함수 이용하기 -> 소수를 갖고있는 실수를 변환할 때 사용
   *    4. +, * 연산자 사용
   */
});

const divs = document.querySelectorAll("div");
divs[0].innerText = parseInt(5.879);
divs[1].innerText = parseFloat(10.789);
