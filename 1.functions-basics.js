"use strict";

// https://ko.javascript.info/function-basics 연습한 내용들

let userName = "John";

// nodejs에서 alert를 대체하기 위해서 만든 함수(예제 수정하기 귀찮음)
function alert(message) {
  console.log(message)
}

function showMessage() {
  let userName = "Bob"; // 같은 이름을 가진 지역 변수를 선언합니다.

  let message = "Hello, " + userName; // Bob
  console.log(message);
}

// 함수는 내부 변수인 userName만 사용합니다,
showMessage();

console.log(userName); // 함수는 외부 변수에 접근하지 않습니다. 따라서 값이 변경되지 않고, John이 출력됩니다.

function showMessage2(from, text) {
  from = "*" + from + "*"; // "from"을 좀 더 멋지게 꾸며줍니다.

  console.log(from + ": " + text);
}

let from = "Ann";

showMessage2(from, "Hello"); // *Ann*: Hello

// 함수는 복사된 값을 사용하기 때문에 바깥의 "from"은 값이 변경되지 않습니다.
console.log(from); // Ann

// 매개변수 기본값 설정하기
function showMessage3(from, text = "no text given") {
  console.log(from + ": " + text);
}

showMessage3("Ann"); // Ann: no text given

// 매개변수로 undefined를 넣어줘도 동일하게 작동함.
showMessage3("Bob", undefined);

// 매개변수 'count'가 `undefined` 또는 `null`이면 'unknown'을 출력해주는 함수
// ??(nullish 병합 연산자:nullish coalescing operator) 에 대해서는 https://ko.javascript.info/nullish-coalescing-operator 를 참고
function showCount(count) {
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown



