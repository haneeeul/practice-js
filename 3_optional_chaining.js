// 오셨습니다. 옵셔널 체이닝
// null 에 점 찍으면 런타임에 아작난다.
const person = null;
const name = person && person.name;
// 옵셔널 체이닝을 사용하면 간단하다.
const name2 = person?.name;
// 위 코드를 풀어서 적어보면 아래와 같다.
// const name2 = person === null || person === undefined ? undefined : person.name;

// 함수를 호출하는 경우에도 옵셔널 체이닝을 사용할 수 있다.
const person2 = {
  // getName: () => "skye",
};
const nameValue = person2.getName?.();
console.log(nameValue); // undefined
// 이건 언제 쓰나요?
// 함수를 매개변수로 받아서 실행할 때 유용한다.
function loadData(onComplete) {
  console.log("loading...");
  onComplete?.(); // 있는건가?
}
loadData(); // error 없이 실행된다.
// 옵셔널 체이닝이 없는 경우, 런타임에 error 발생

const person3 = { friends: null, mother: null };

const firstFriend = person3.friends?.[0]; // friends 라는 배열은 null 이므로 undefined 가 할당된다.

const prop = "name";
const name3 = person3.mother?.[prop]; // 마찬가지로 mother 객체에 name 이라는 속성은 없으므로 name3 변수에 undefined 할당

// 널체크(undefined체크)에 기본값 추가도 아주 손쉬워요~
const person4 = {};
const name4 = person4?.friends?.[0]?.mother?.name ?? "default name";
