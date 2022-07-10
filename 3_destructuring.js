// destructuring(비구조화) 문법: 배열이나 객체의 모든 속성값을 변수로 쉽게 꺼내보자
// 배열 비구조화는 대괄호([])를 사용한다.
const arr = [1, 2];
let [a, b] = arr; // a = 1, b = 2 가 들어간다.
console.log(a);
console.log(b);

// 기본값도 정의할 수 있다.
const arr2 = [1]; // 배열에 값이 하나뿐이기 때문에, 두번째 아이템은 undefined
const [a2 = 10, b2 = 20] = arr2; // undefined 인 경우에만 기본값을 넣어준다.
console.log({ a2, b2 });
// null 은? 값이라고 생각한다.
// const arr2 = [1, null];
// const [a2 = 10, b2 = 20] = arr2;
// console.log({ a2, b2 }); // { a2: 1, b2: null }
// 빈 스트링은? 값이라고 생각한다.
// const arr2 = [1, ""];
// const [a2 = 10, b2 = 20] = arr2;
// console.log({ a2, b2 }); // { a2: 1, b2: '' }

// 값을 바꾸기 위해 temp 변수 만드는 것도 이제 bye
[a, b] = [b, a]; // 엥 아주 간편
console.log({ a, b });

// 배열 비구조화에서 일부 속성값을 무시하고 싶다면, 무시하고 싶은 개수만큼 ,(쉼표)를 입력하자
const arr3 = [1, 2, 3];
const [itemA, , itemC] = arr3; // 2는 무시한다.
console.log({ itemA, itemC }); // { itemA: 1, itemC: 3 }

const arr4 = [1, 2, 3];
const [first, ...rest1] = arr4; // 쉼표 개수만큼 제외하고 나머지 아이템은 rest1에 담긴다.
console.log(rest1); // [ 2, 3 ]
const [a1, b1, c1, ...rest2] = arr4; // 아이템이 3개인데 쉼표도 3개라면?
console.log(rest2); // 빈 배열이 된다.

// 객체 비구조화는 중괄호({})를 사용하고, 해당하는 속성명을 입력하면 됩니다.
const obj = { age: 21, name: "mike" };
const { age, name } = obj;
console.log({ age, name });

// 배열과 달리 순서정보는 중요하지 않다.
// 그러나 존재하지 않는 속성명을 사용하면 undefinded가 할당된다.
const { name00, age_ord } = obj;
console.log({ name00, age_ord }); // { name1: undefined, age_ord: undefined }
// 그럼 속성명을 지정해보자
const obj2 = { age1: 100, name1: "skye" };
const { age1: age2, name1 } = obj; // age1의 값을 갖는 age2가 생긴다.
console.log(age2);
// console.log(age1); // 존재하지 않는 변수이므로 error

// 기본값을 지정하기 위해서는 원래 값이 undefined 여야만 한다.
// null도 값으로 친다.
const obj3 = { age3: undefined, name3: null, grade3: "A" };
const { age3 = 0, name3 = "noName", grade3 = "F" } = obj3;
console.log({ age3, name3, grade3 }); // { age3: 0, name3: null, grade3: 'A' }

// 기본값으로 함수도 할당 가능
function getDefaultAge() {
  console.log("hello");
  return 0;
}
const obj4 = { age4: undefined, grade4: null };
const { age4 = getDefaultAge(), grade4 = getDefaultAge() } = obj4; // 값이 undefined 인 경우에만 함수가 실행된다.
console.log({ age4, grade4 });
// hello // 한번만 출력
// { age4: 0, grade4: null }

// 전개 연산자를 이용하여 나머지 속성을 모두 갖는 객체를 만들자
const obj5 = { age: 50, name: "sam", grade: "A" };
const { age: age5, ...rest } = obj5;
console.log({ rest }); // { rest: { name: 'sam', grade: 'A' } }

const people = [
  { age: 21, name: "mike" },
  { age: 51, name: "sara" },
];
// for...of 문에서 객체 비구조화 사용하기
for (const { age, name } of people) {
  // ...
}

// 부록
// 비구조화를 중첩하여 사용하기
const obj6 = { name6: "mike", mother: { name: "sara" } };
const {
  name6,
  mother: { name: motherName }, // mother 라는 객체의 name이라는 속성의 값을 motherName 이라는 변수에 할당한다.
  // 결론: mother 라는 변수는 없다.
} = obj6;
console.log({ name6, motherName });
//console.log(mother); // 없는 변수이므로 error.

// 기본값으로 객체를 할당하면?
// 기본값으로 { prop: 123 } 를 할당한다.
const [{ prop: xx } = { prop: 123 }] = [];
console.log(xx); // 배열이 비어있으니 xx 변수에는 123 이 들어간다.
const [{ prop: xxx } = { prop: 123 }] = [{}];
console.log(xxx); // 빈 객체(이것도 값으로 친다)가 할당되어 undefined

// 객체 비구조화에서 계산된 속성명 사용시, 반드시 별칭을 붙여야 한다.
const index = 1;
const { [`key${index}`]: valueOfTheIndex } = { key1: 123 }; // valueOfTheIndex 필수
console.log(valueOfTheIndex);

// 객체의 비구조화 별칭을 사용할 때, 어떤 객체의 특정 속성값이나, 배열의 특정 인덱스를 사용할 수 있다.
// ~~이해가 어려움~~
const obj7 = {};
const arr7 = [];
({ foo: obj7.prop, bar: arr7[0] } = { foo: 123, bar: true });
console.log(obj7); // obj7 객체에 prop 이라는 속성명과 123이라는 값을 가진 속성이 생긴다.
console.log(arr7); // arr7 배열에 true 라는 아이템이 생긴다.
// { prop: 123 }
// [ true ]
