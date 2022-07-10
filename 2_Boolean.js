// number 에서 false가 되는 값
const numFalse1 = 0;
const numFalse2 = NaN;
// string 에서 false가 되는 값
const strFalse1 = "";

// 논리 연산자(&& ||)의 결과는 마지막 평가이다.
const c1 = 123;
const c2 = "abc";
const v1 = c1 && c2; // c1이 true 이므로 다음 c2의 평가 결과가 v1의 값이 된다.
const v2 = c1 && c2 && 0; // c1은 true, c2도 true 이므로 0이 v2의 값이 된다.
const v3 = c1 && 0 && c2; // c1은 true 이나 0은 false 이므로 && 연산자는 c2의 값과 상관없이 0을 반환한다.
console.log({ v1, v2, v3 }); // { v1: 'abc', v2: 0, v3: 0 }

const v4 = c1 || c2; // c1이 true 이므로 || 연산자는 c2의 값과 상관없이 c1을 반환한다.
const v5 = "" || c2; // ''이 false 이므로 || 연산자는 c2 값을 확인한다. c2가 true이므로 c2를 반환한다.

// 이처럼 논리 연산자의 결과는 항상 true, false가 아니다.
// 항상 true, false를 얻고 싶다면 !! 연산자를 사용하자
console.log(v4); // 123
console.log(!!v4); // ture

// && 연산자는 좌측 피연산자가 true일 때만 우측 피연산자 위치의 코드를 실행한다.
// 이 특성을 사용해서 && 연산자를 if문처럼 사용하자
v4 && console.log("log1");

// || 연산자의 특성을 사용해서 기본값을 세팅해보자
// 0 or NaN 인 경우 1000 으로 초기화
const money = v4 || 1000;
// 빈 문자열 인 경우 '카카오페이' 로 초기화
const pay = v5 || "카카오페이";

// 기본값을 세팅하는 문법: nullish coalescing
const person = {};
const name = person.name ?? "unknown";
// 다음과 같다.
const nameTemp =
  person.name === undefined || person.name === null ? "unknown" : person.name;
// OR 연산자랑 다른게 없는데?
// OR 연산자는 '', 0을 false로 판단
// nullish coalescing 은 '', 0도 값으로 판단하여 기본값을 세팅하지 않는다.
const product = { desc: "", price: 0 };
const descInput = product.desc ?? "상품 설명을 입력하세요";
const priceInput = product.price ?? 1000;
console.log({ descInput, priceInput }); // { descInput: '', priceInput: 0 }

//const value1 = 'abc' || 123 ?? 'undefined vlaue'; // error
const value2 = ("abc" || 123) ?? "undefined vlaue"; // nullish coalescing 의 앞부분에 논리연산자를 사용하는 경우, ()로 묶자.

// || 연산자, nullish coalescing 모두 좌측 피연산자가 true 면 우측 피연산자 위치의 함수를 실행하지 않는다.

const value3 = "skye";
const value4 = "";
function defaultValueIsEmpty() {
  console.log("Default Value is Empty.");
  return "default name";
}

console.log(value3 ?? defaultValueIsEmpty()); // skye
console.log(value4 ?? defaultValueIsEmpty()); // 빈 문자열인 value4를 그대로 출력~
console.log(value3 || defaultValueIsEmpty()); // skye
console.log(value4 || defaultValueIsEmpty()); // Default Value is Empty.
