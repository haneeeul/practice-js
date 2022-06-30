// ES6는 2015년에 나온 js 표준

// var 의 첫번째 문제: 함수 스코프를 갖는다
function ex() {
  var i = 1;
}
console.log(i); // error

var j = 2; // 전역변수

// 함수 안에서 var 키워드를 사용하지 않고 변수 초기화 시 전역변수가 된다.
// 이를 막기 위해 파일 최상단에
// 'use strict';
// 선언하면 ex1()는 레퍼런스 에러가 명시적으로 발생한다.
function ex1() {
  z = 2;
}
function ex2() {
  console.log(z);
}
ex1();
ex2(); // print 2

// var 변수의 스코프를 제한하는 방법: 즉시 실행 함수를 사용한다.
// 즉시 실행 함수: 함수가 정의되는 시점에 바로 실행되고 사라지는 함수
(function () {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
})();
console.log("last:", i); // var i 변수는 즉시 실행 함수의 스코프에서만 접근이 가능하므로 error

// 호이스팅(hoisting): 어떤 변수의 정의가 변수가 속한 스코프의 최상단으로 끌어올려지는 것
console.log(myVar); // myVar를 정의하기 전에 사용해도 에러가 발생하지 않는다. undefined 출력
var myVar = "hello";

// 이것도 가능
console.log(myVar2); // undefined
myVar2 = 2;
console.log(myVar2); // 2
var myVar2 = 1;

// var 의 두번째 문제: 한번 정의한 변수를 재정의하는 것이 가능하다
var value = 0;
var value = 1;

// 상수처럼 사용해야할 값도 재할당이 가능한 변수로 만들어진다.
var PI = 3.141592;
PI = 123;

// const, let : 블록 스코프를 갖는다.
if (true) {
  const num = 0;
}
console.log(num); // error, const 는 블록스코프를 갖기때문에 if문을 벗어나서는 참조 불가능

let foo = "foo1";
console.log(foo); // print foo1
if (true) {
  let foo = "foo2";
  console.log(foo); // 우선순위에 의해 foo2. 바로 윗라인을 주석처리하면 foo1 출력한다.
}
console.log(foo); // print foo1

// const, let 변수도 호이스팅이 되지만, 변수를 정의하기 전에 변수를 사용하려고 하면 참조 에러가 발생한다.
console.log(str);
const str = "123";
/*
 * var: 호이스팅 되고 undefined 할당됨
 * const, let: 호이스팅 되고 아무값도 할당되지 않음
 */

const temp = 1;
{
  console.log(temp);
  const temp = 2; // 만약 호이스팅이 되지 않는다면, 참조 에러는 발생하지 않고 1이 출력되겠지만, 호이스팅이 되므로 참조 에러가 발생한다.
}

// const: 재할당 불가능한 변수
// let: 재할당 가능한 변수
// const 로 정의된 객체 변수의 내부 속상값은 수정이 가능하다.(존재하는 속성값 수정 및 새로운 속성 추가 가능)
// 이를 막고 싶다면 immer 와 같은 외부 패키지를 사용하거나(기존 객체의 속성을 수정하면 새로운 객체를 만들어줌)
// 수정을 막는 자바스크립트 내장함수를 사용하자
const obj = Object.freeze({ prop1: "a" });
obj.prop1 = "b"; // error
// Object.freeze
// Object.seal
// Object.preventExtensions
