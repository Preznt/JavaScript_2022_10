const line = "================================<br/>";

document.write(line);
document.write("안녕하세요<br/>");
document.write(line);

// 변수 2개에 숫자를 각각 보관한 후 5가지 연산을 수행
const num1 = 20;
const num2 = 75;

document.write(num1 + " + " + num2 + " = ");
document.write(num1 + num2);
document.write("<br/>");

document.write(num1 + " - " + num2 + " = ");
document.write(num1 - num2);
document.write("<br/>");

document.write(num1 + " x " + num2 + " = ");
document.write(num1 * num2);
document.write("<br/>");

document.write(num2 + " ÷ " + num1 + " = ");
document.write(num2 / num1);
document.write("<br/>");

// 두수를 나눗셈 한 후 나머지 구하기
document.write(num2 + " MOD " + num1 + " = ");
document.write(num2 % num1);
document.write("<br/>");
// 자바스크립트에서는 숫자인 경우 5가지 연산을 사용할 수 있다
