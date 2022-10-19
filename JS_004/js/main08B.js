/**
 * 회원가입 버튼을 클릭하면
 * 1. 아이디, 비번, 비번확인을 입력했는지 확인하고
 *    입력하지 않았으면 입력하도록 focus() 지정
 * 2. 비밀번호와 비밀번호 확인 데이터가 다르면
 *    비밀번호 부터 다시 입력받도록 하기
 */

const btnSubmit = document.querySelector(".btn_submit");
/**
 * Selector
 * css 나 js코드에서 참조할 수 있는  tag 요소들
 * tagName(dic, p) : 여러개 있을 수 있다,
 * id(#username, #password) : 한 화면에 1개만 있엉야 한다
 * class(div.div1, button.btn) : 여러개 있을 수 있다
 */
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#re_password");
/**
 * HTML 에서 id나 class이름을 지을때
 * snack case로 많이 작성한다
 * 이 이름을 JS코드에서 변수로 선언할떄는
 * 가급적 Camel Case로 작성하는 것이 좋다
 */
btnSubmit.addEventListener("click", () => {
  const txtRepassword = rePassword.value;
  //if(username ==="") : 보편적인 언어
  //JS 고유의 코드
  if (!username.value) {
    alert("아이디를 입력해주세요");
    username.focus();
    return false;
  }
  if (!password.value) {
    alert("비밀번호를 입력해주세요");
    password.focus();
    return false;
  }
  if (!txtRepassword) {
    alert("비밀번호 확인을 입력해주세요");
    rePassword.focus();
    return false;
  }

  //비밀번호와 비밀번호 확인 값(데이터)이 다르면
  if (password.value !== txtRepassword) {
    alert("비밀번호와 확인 값이 다릅니다 \n다시 확인해 주세요");
    password.value = "";
    rePassword.value = "";
    password.focus();
    return false;
  }
  //서버로 데이터 전송하기
});
