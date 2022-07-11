// 객체를 생성하는 방법
// 1. {}
const obj = {
  age: 100,
  name: "skye",
};
// 2. new Object() -> new 키워드와 Object 생성자를 사용한다.
const obj2 = new Object({
  age: 100,
  name: "skye",
});

// js 객체의 메소드는 쓸만한게 없으나, Object 생성자를 통해 제공되는 함수를 자주 사용한다.
console.log(Object.keys(obj)); // 객체의 모든 key를 배열로 반환
// [ 'age', 'name' ]
console.log(Object.values(obj)); // 객체의 모든 value를 배열로 반환
// [ 100, 'skye' ]
console.log(Object.entries(obj)); // 객체의 모든 key, value를 튜플 형태로 반환
// [ [ 'age', 100 ], [ 'name', 'skye' ] ]
// Object.entries()의 활용
// for ... of 문법
// [key, value] <- destructuring 문법
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

// 객체의 속성 추가
obj.city = "buchoen";
obj["gender"] = "Female";
console.log(obj);

// 객체의 속성을 변경
obj.age = 1;
console.log(obj);

// 객체의 속성을 삭제
delete obj.city;
delete obj["gender"];
console.log(obj);

// Array
// 배열을 생성하는 방법
// 1. []
const arr = [1, 2, 3];
// 2. new Array()
const arr2 = new Array(1, 2, 3);
console.log(typeof arr === "object"); // ture!!
// 배열은 객체이기 때문에, 객체 생성자의 함수를 사용할 수 있다.
console.log(Object.values(arr));

// 최빈 array method
console.log(arr.map((item) => item + 1));
// map() 기존 배열은 건들지 않고, 새로운 배열을 return
console.log(arr.filter((item) => item >= 2));
// filter() 도 기존 배열은 건들지 않고, 새로운 배열을 return
console.log(arr.reduce((acc, item) => acc + item, 100));
// reduce() 는 가장 오른쪽 값에서부터(100) acc + item 연산을 수행하고 그 값을 반환한다.
// acc 는 누적값

// 배열을 도는 방법
arr.forEach((item) => console.log(item));
for (const item of arr) {
  console.log(item);
}

// 유용한 메소드
console.log(arr.some((item) => item === 2)); // 배열의 원소 중 하나라도 조건을 만족하면(true면) true 반환
console.log(arr.every((item) => item === 2)); // 배열의 모든 원소가 조건을 만족하면 true 반환
console.log(arr.includes(2)); // true
console.log(arr.includes("2")); // false
console.log(arr.find((item) => item % 2 === 1)); // 조건을 만족하는 첫번째 원소를 반환
console.log(arr.findIndex((item) => item % 2 === 1)); // 조건을 만족하는 첫번째 원소의 인덱스를 반환

// 배열에 원소 추가/삭제
// 5를 맨 뒤에 추가
arr.push(5);
console.log(arr);
// 맨 뒤 원소를 삭제 후 반환
console.log("arr.pop() item is : ", arr.pop());
// 인덱스 1부터 2개를 삭제하고 그 바로 뒤에 7, 8, 9를 추가
arr.splice(1, 2, 7, 8, 9);
console.log(arr);
// 인덱스 0부터 0개를 삭제하고 그 바로 뒤에 [1, 2, 3, 4, 5, 6]를 추가
arr.splice(0, 0, [1, 2, 3, 4, 5, 6]);
console.log(arr);

// sort
arr.sort(); // 기존 함수를 오름차순으로 정렬
console.log(arr);
// 정렬 전: [ [ 1, 2, 3, 4, 5, 6 ], 1, 7, 8, 9 ]
// 정렬 후: [ 1, [ 1, 2, 3, 4, 5, 6 ], 7, 8, 9 ]
const arrMix = [1, 2, 5, 3, "a", "apple", "c", "sea", "10", 11];
console.log(arrMix.sort());
// [1, "10", 11, 2, 3, 5, "a", "apple", "c", "sea"] 문자열 기준으로 정렬한다!

const arrNum = [0, 1, 2, 3, 4, 5, 10];
arrNum.sort((a, b) => b - a); // 반환값이 양수면 자리를 바꾼다.
console.log(arrNum); // 내림차순 정렬
arrNum.sort();
console.log(arrNum); // 문자열로 치환해서 정렬함 !!! 1 다음에 10 !!!
