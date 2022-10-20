const inputs = document.querySelectorAll("input");
const tbodyScore = document.querySelector("tbody.score");
const btnAdd = document.querySelector("button.add");

/**
 * 국어, 영어, 수학 점수가 0~100 점 범위를 벗어나면
 * 점수가 잘못 입력되었다는 alert 을 띄우고
 * 다시 점수를 입력받기
 */

const scoreInput = () => {
  for (let i = 2; i < inputs.length; i++) {
    if (inputs[i].value < 0 || inputs[i].value > 100) {
      alert("점수를 다시입력해주세요");
      inputs[i].value = "";
      inputs[i].focus;
      return;
    }
  }

  // if (inputs.name !== "sc_num" && inputs.name !== "sc_name") {
  //   inputs.forEach((input) => {
  //     if (input.value < 0 || input.value > 100) {
  //       alert("점수를 다시입력해주세요");
  //       input.value = "";
  //       input.focus;
  //       return;
  //     }
  //   });
  // }

  const tr = document.createElement("TR");

  /**
   * 배열.forEach(요소 => {실행할 코드})
   * 배열 전체를 반복하여 수행하는 for() 반복문과 같다
   * for() 에서는 각 요소를 배열[index] 와 같이
   * 값을 접근(참조)해야 한다
   * forEach() 에서는 각 요소의 값을 내부에서 변수를
   * 생성하여 전달한다
   *
   * inputs 배열 전체를 반복수행하는데
   * 각요소(inputs[0], inputs[1]....) 를
   * input 변수를 선언하고, 변수에 담아서 {} 내부로
   * 보낸다
   */
  let sum = 0;
  inputs.forEach((input) => {
    const td = document.createElement("TD");
    td.textContent = input.value;
    tr.appendChild(td);
    // 조건 학번을 단순한 숫자로 처리하지 말것
    // S001 이런 방식으로 학번 문자열로 처리하기
    // if (Number(index.value)) {
    //input tag의 name 속성이 sc_num가 아니고
    //sc_name 도 아닐 경우에만 sum에 누적하기

    if (input.name !== "sc_num" && input.name !== "sc_name") {
      sum += Number(input.value);
    }
  });

  let td = document.createElement("TD");
  td.textContent = sum;
  tr.appendChild(td);

  tbodyScore.appendChild(tr);
};

btnAdd?.addEventListener("click", scoreInput);
