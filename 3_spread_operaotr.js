// 객체와 배열을 생성하는 더 간편한 방법
// shorthand property names(단축속성명): 객체 리터럴 코드를 보다 간편하게 작성하자
const name = "mike";
const age = 21;
const obj = {
  age: 21,
  name, // 위의 name을 그대로 사용. 값도 할당된다.
  getName() {
    // 함수 이름이 그대로 속성명이 된다.
    return this.name;
  },
};
function makePerson1(age, name) {
  return { age, name };
}
// 단축속성명이 없다면?
const obj2 = {
  age: 21,
  name: name,
  getName: function getName() {
    // 함수 이름이 그대로 속성명이 된다.
    return this.name;
  },
};
function makePerson2(age, name) {
  return { age: age, name: name }; // 객체 반환을 하기가 복잡..
}
// 단축속성명을 사용해서 간편하고 명확하게 변수를 찍어보자
console.log({ name, age }); // { name: 'mike', age: 21 }

// computed property names(계산된 속성명): 속성명을 동적으로 결정하자
// 대괄호 안에 변수를 입력할 수 있다.
function makeObject2(key, value) {
  return { [key]: value }; // 바로 객체 반환
}
// 원래는?
function makeObject1(key, value) {
  const obj = {};
  obj[key] = value; // 이렇게 미리 생성된 객체에 추가 가능..
  return obj;
}

// spread operator(전개 연산자): 객체와 배열의 속성값을 편리하게 가져오자
// 전개 연산자를 사용해서 배열의 값 풀어놓기
const numbers = [1, 3, 7, 9];
Math.max(...numbers);
// 깊은 복사도 간편
const arr1 = [1, 2, 3];
const obj3 = { age: 23, name: 'skye' };
const arr2 = [...arr1];
const obj4 = { ...obj3 };
arr2.push(4); // arr1에 영향없음
obj4.age = 80; // obj3에 영향없음

// 배열의 경우 전개 연산자 사용 시, 배열의 순서가 유지된다.
[1, ...[2, 3], 4]; // [1, 2, 3, 4]
// 순서를 유지하기 때문에, 날짜를 관리하는 배열을 복사할 때 전개 연산자를 사용한다.
new Date(...[2018, 11, 24]); // 2018년 12월 24일

// 객체 리터럴에서 중복된 속성명을 사용하면 마지막 값이 해당 속성의 값이 된다.
// 중복된 속성명 + 전개 연산자를 이용해서 특정 속성값만 변경하고 새로운 객체를 만들어보자
const obj5 = { x: 1, x: 2, y: "a" }; // x 라는 이름의 속성이 중복되었으므로 { x: 2, y: 'a' }
const obj6 = { ...obj5, y: "b" }; // { x: 2, y: 'a' } + y: "b" 로 y 라는 이름의 속성이 중복되었으므로 { x: 2, y: 'b' }
console.log({ obj5, obj6 });