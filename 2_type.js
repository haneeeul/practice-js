// 8가지 js의 기본타입
// number, bigint, string, boolean, object, symbol, undefined, null

const v1 = 12; // number
const v2 = 123456789123456789123456789n; // n을 붙이면 bigint
const v3 = "abc"; // string
const v4 = true; // boolean
console.log(typeof v1, typeof v2, typeof v3, typeof v4);

const v5 = {}; // object
const v6 = Symbol("abc"); // object 에서 유니크한 속성 이름을 표현할때 사용하는 타입
// 값이 없다는 표현
const v7 = undefined; // undefined: 값이 할당된 적이 없음
const v8 = null; // null인데, console.log() 에는 object로 찍힌다.(초기 js typeof의 버그때문이다.)
console.log(typeof v5, typeof v6, typeof v7, typeof v8);

// Object로 파생된 function 과 같은 타입도 있다.
function f1() {}
console.log(typeof f1); // print function

class MyClass {}
console.log(typeof MyClass); // print function, function 을 기반으로 만들어졌기 때문

// 그럼 null 은 타입을 어떻게 찍어보지?
console.log(Object.prototype.toString.call(null)); // [object Null]
// 배열도 확인할 수 있다
console.log(typeof []); // object
console.log(Object.prototype.toString.call([])); // [object Array]

// Symbol 은 object의 유일한 속성 이름을 만들 때 사용한다.
const idSymbol = Symbol("id");
const obj = { id: 123 };
obj[idSymbol] = 456; // 일반적으로 obj = { id : 456 }
// 그러나 Symbol type으로 속성 이름을 지정했기 때문에 이름이 같은 새로운 속성이 추가된다.
console.log(obj); // { id: 123, [Symbol(id)]: 456 }

// js의 내장심볼: iterator
const arr = [];
console.log(arr[Symbol.iterator]);

// type 변환 함수 : String(), Number(), BigInt(), Boolean()
const b1 = Boolean(123); // true
const b2 = Boolean(0); // false
// 문자열의 경우, 문자열의 길이가 0보다 크면 true
const b3 = Boolean("abc"); // true
const b4 = Boolean(""); // false

// Boolean() 대신 !! 사용하기
// ! : logical NOT
const b5 = !!123;
const b6 = !!0;
const b7 = !!"abc";
const b8 = !!"";

// new 키워드를 사용하면 object로 만들어진다.
console.log(typeof new Boolean(true));
console.log(typeof new Number(1));
console.log(typeof new String("abc"));
// print all 'object'

// 하지만 이렇게 속성값을 추가할게 아니라면 굳이 new 키워드를 쓸 필요는 없어보인다.
const s1 = new String("abc");
s1.id = 123;
console.log("value: ", s1.valueOf()); // abc
console.log("id: ", s1.id); // 123

// === : 두 값의 타입과 값이 같은지 검사
// == : 두 값의 타입이 다르면, 타입을 변환해서 값이 같은지 검사
console.log(123 === 123); // true
console.log("123" === "123"); // true
console.log("123" === 123); // false
console.log(0 === false); // false
console.log(123 === true); // false

// == 의 타입변환 과정을 완벽하게 이해한게 아니라면, == 은 되도록 사용하지 말자.
console.log(123 == 123); // true
console.log("123" == "123"); // true
console.log("123" == 123); // true ???
console.log(0 == false); // true ?
console.log(123 == true); // false ?????
