/**
 * DOM: Document Object Model, html 화면에 있는 모든 요소(tag)
 * DOMContent : 화면에 보이는 모든 것
 * DOMContentLoaded : 화면에 모든 요소가 다 그려지면..
 */

document.addEventListener("DOMContentLoaded", () => {
  const btnRe = document.querySelector("div.btn_re");
  // span 의 개수가 많아서, class 를 모두 붙이기가 번거롭다
  // 부모 div에 class 를 지정하고 div span 형식으로
  // span tag를 가져온다
  const spanNumbs = document.querySelectorAll("div.number span");
  const divToday = document.querySelector("div.today");

  const lottoDisp = () => {
    const nums = []; // 빈(blank) 배열 선언

    // blank nums 배열을 45개 만들면서
    // 요소 0 ~ 44까지 요소에  숫자 1 ~ 45까지 숫자 채우기
    for (let i = 0; i < 45; i++) {
      // nums.push(i+1)
      nums[i] = i + 1;
    }
    // test 하기 위한 코드
    /**
     * Math.random() 함수는
     * 0.0000~ 0.99999999999999999 까지 범위에서
     * 임의 숫자 1개를 만들어 내는 기능
     *
     * 생성된 숫자에 10을 곱하면
     * 0 ~ 9.9999 범위의 수가 만들어 진다
     *
     * 이 숫자를 Math.floor() 함수에게 전달하면
     * 0 ~ 9까지 범위의 정수를 만들어서 return 한다
     */

    const rndNum = Math.floor(Math.random() * 10);
    console.log(rndNum);

    const nums1 = [1, 2, 3, 4, 5];
    for (let i = 0; i < 10; i++) {
      const index1 = Math.floor(Math.random() * 5);
      const index2 = Math.floor(Math.random() * 5);

      console.log(nums1, index1, index2);
      let tnum = nums1[index1];
      nums1[index1] = nums1[index2];
      nums1[index2] = tnum;

      console.log(nums1, index1, index2);
    }
    // test end

    /**
     * 숫자 1 ~ 45까지 숫자가 저장된 nums 배열을 shuffle 해 보자
     */
    for (let i = 0; i < 1000; i++) {
      const index1 = Math.floor(Math.random() * 45);
      const index2 = Math.floor(Math.random() * 45);
      const _temp = nums[index1];
      nums[index1] = nums[index2];
      nums[index2] = _temp;
    }
    console.log(nums);
    for (let i = 0; i < spanNumbs.length; i++) {
      spanNumbs[i].textContent = nums[i];
    }

    /**
     * 컴퓨터의 현재 날짜, 시각과 관련된
     * 정보를 가져와서(getter)
     * today 객체를 만들고 보관하라(setter)
     */
    const today = new Date();
    const year = today.getFullYear(); // 전체연도(2022)
    const month = today.getMonth(); // 월
    const date = today.getDate(); // 일

    // 주일의 값을 숫자로 가져오기
    // 일요일 = 0, 월요일 = 1.....
    const weekNum = today.getDay();

    const weekString = "일월화수목금토";
    // const weekString = ["월","화", "수","목", "금","토"]
    // 문자열 변수에 저장된 문자열은 마치 문자열 배열에
    // 저장된 것처럼 취급 할 수 있다
    // weekString 변수에 저장된 문자열 중에서
    // weekNum index 번째 문자열을  getter 하여 weekText에 담아라
    // 다른 프로그램 언어는 위처럼 만들어야함
    const weekText = weekString[weekNum];
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const miliSeconds = today.getMilliseconds();

    const todayContent = `${year}년 ${month}월 ${date}일 (${weekText})
    ${hours}:${minutes}:${seconds}:${miliSeconds}`;
    divToday.textContent = todayContent;
  };

  btnRe?.addEventListener("click", () => {});

  // event handler 로 사용하는 함수는 ()를 붙여서는 안된다
  // event handler Callback 함수 라고 부른다
  btnRe?.addEventListener("click", lottoDisp);
  // DOMContentLoaded 가 완성되면
  // 즉시 실행하라
  // 여기는 함수에 ()를 붙여야 한다
  // 화면이 새로고침, 새롭게 열릴때 실행하라
  lottoDisp();
});
