/**
 * 회원가입 버튼을 클릭하면
 * 1. 아이디, 비번, 비번확인을 입력했는지 확인하고
 *    입력하지 않았으면 입력하도록 focus() 지정
 * 2. 비밀번호와 비밀번호 확인 데이터가 다르면
 *    비밀번호 부터 다시 입력받도록 하기
 */

const btnSubmit = document.querySelector(".btn_submit");
const id = document.querySelector("#username");
const password = document.querySelector("#password");
const chkPassword = document.querySelector("#re_password");

btnSubmit.addEventListener("click", () => {
  const txtId = id.value;
  const txtPassword = password.value;
  const txtChkPass = chkPassword.value;

  if (!txtId) {
    alert("아이디를 입력해주세요");
    id.focus();
    return;
  }
  if (!txtPassword) {
    alert("비밀번호를 입력해주세요");
    password.focus();
    return;
  }
  if (!txtChkPass) {
    alert("비밀번호 확인을 입력해주세요");
    chkPassword.focus();
    return;
  }
  if (txtPassword !== txtChkPass) {
    alert("비밀번호와 확인이 다릅니다 다시 입력해주세요");
    password.value = "";
    chkPassword.value = "";
    password.focus();
  }
});
