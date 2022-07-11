자바스크립트의 함수는 First Class Citizen(일급 함수)이다.

[MDN - 일급함수](https://developer.mozilla.org/ko/docs/Glossary/First-class_Function)
> 함수가 다른 변수처럼 취급되어야 한다.

js 는 일급 함수를 갖고 있기 때문에, 변수에 함수를 담을 수 있다.
```
const add10 = function (a) {
  return 10 + b;
};
```
함수를 매개 변수로 전달할 수도 있다.
```
function apply(arr, op) {
  return arr.map(op);
}
apply([1, 2, 3], add10);
```
함수를 반환할 수도 있다.
```
function makeAdd(v1) {
  return function (v2) {
    return v1 + v2;
  };
}
const add3 = makeAdd(3);
console.log(add3(10));
const add7 = makeAdd(7);
console.log(add7(10));
```

### Closure(클로저)
: 함수와 그 함수를 둘러싸고 있는 주변의 상태를 기억하는 기능
: 이 기능으로 내부함수는 외부함수의 **매개변수**와 **지역변수**에 접근할 수 있다.
많은 언어에서 함수의 지역변수와 매개변수는 함수가 실행되는 동안에만 존재하지만, js는 그렇지 않다.
```
function makeAdd(v1) {
  return function (v2) {
    // 어떻게 v1의 값을 읽을 수 있지??
    return v1 + v2;
  };
}
const add3 = makeAdd(3);
console.log(add3(10));
const add7 = makeAdd(7);
console.log(add7(10));
```

### execution context(함수 실행 정보)와 lexical environment
- 함수의 실행 정보를 관리하기 위해 call stack을 사용한다.
- js에서는 이렇게 **call stack에 담기는 함수 실행 정보를 execution context**라고 한다.
- 최초 global execution context 이 콜스택에 저장되고, 순서대로 함수를 실행하면서 콜스택에 저장했다가 제거한다.
- 함수의 지역변수 등을 저장하는 것을 lexical environment 라고 한다.
  - execution context 안에 lexical environment 가 존재한다.
  - { 변수이름 : 값 } 형태로 지역변수를 저장한다.  
-- call stack  
&nbsp;&nbsp;ㄴ global execution context  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ㄴlexical environment  
&nbsp;&nbsp;ㄴ execution context1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ㄴlexical environment  
&nbsp;&nbsp;...
