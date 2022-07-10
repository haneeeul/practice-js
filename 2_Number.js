// Number 익숙해지기

console.log(Number.parseInt("123")); // 123
console.log(Number.parseInt("123.456")); // 123
console.log(Number.parseInt("123abc")); // 123
console.log(Number.parseInt("123abc456")); // 123

console.log(Number.parseFloat("123")); // 123
console.log(Number.parseFloat("123.456")); // 123.456
console.log(Number.parseFloat("123abc")); // 123
console.log(Number.parseFloat("123.456.789")); // 123.456
console.log(Number.parseFloat("123,456.789")); // 123

// 숫자가 전혀 없다면?
const v = Number.parseInt("abc");
console.log(v); // NaN : Not a Number

// NaN 검사 함수
console.log("v", Number.isNaN(v)); // ture
console.log("123", Number.isNaN(123)); // false

// js에서 0으로 나누면?
const inf = 1 / 0;
console.log(inf); // Infinity

// Infinity 는 전역변수로 노출되어 있어
console.log("Infinity", v === Infinity); // true
console.log("Number.isFinite", Number.isFinite(v)); // v는 무한대이므로 false

// js의 Number는 무조건 64비트 부동소수점 방식을 사용한다

/*
 * 부동소수점(floating point)
 * 부호(sign bit, 1bit), 지수부(exponent, 11bits), 가수부(fraction 52bits)
 * (-1)^부호 + 가수부(숫자의 정확도를 담당. 표현 가능한 숫자의 자릿수) + 2^지수부(숫자가 얼마나 커질 수 있는지 담당)
 * 따라서 가수부의 자릿수에 따라 정확도(precision)가 달라진다.
 * js는 이외 복잡한 인코딩 방법을 채택하여 결론적으로 53 bits의 precision을 갖는다.
 */

// C, java는 정수와 실수를 구분하지만, js는 그런거 없다.
// 장점: 단일형태
// 단점: 메모리 최적화에는 불리(작은 숫자도 64bit 사용하니까)
// 메모리 최적화를 위해서는 ArrayBuffer를 사용할 수 있다.

// js의 precision은 53bits 이므로 연산에서 비교적 안전하게 표현가능한 수의 범위는
// -(2^53 - 1) ~ (2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MAX_VALUE); // 연산의 정확도는 떨어지지만 더 큰 수도 표현할 수 있다.

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true;
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false; // 안전하지 않다 === 연산의 결과가 정확하지 않을 수 있다

// Number.MAX_SAFE_INTEGER = 9007199254740991
console.log(9007199254740995 - 10); // 부정확
console.log(9007199254740995n - 10n); // bigint를 사용해 정확한 결과를 얻는다.
// 따라서 연산결과의 정확성을 보장하기 위해서는 피연산자와 연산결과값을 모두 Number.isSafeInteger() 로 확인하자.

console.log(0.1 + 0.2 === 0.3); // false ???
// number가 부동소수점 방식을 사용하기 때문에 precision 이 정해져 있어 정확도에 한계가 있다.
console.log(0.1 + 0.2); // 0.30000000000000004 <- 53bits의 precision으로 표현이 안되는 부분이 있기 때문이다...
// 그럼 어떻게 비교하는가?
console.log(Number.EPSILON); // 2.220446049250313e-16, 53bits precision 기준 무시할 수 있는 아주 작은 값
function isSimilar(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}
console.log(isSimilar(0.1 + 0.2, 0.3)); // ture!
