// js에서 문자열 만들기
const s1 = "abc";
const s2 = "abcd";
const s3 = `abcde`;

// template literals 사용해서 문자열 연결하기
const name = "skye";
const age = 100;

const text1 = "name: " + name + ", age: " + age;
const text2 = `name: ${name}, age: ${age}`;
console.log(`${text1}
${text2}`); // 이게 되네

// template literals 사용해서 코드 그대로 출력하기
const text3 = "안녕하세요.\n하늘입니다.";
const text4 = `안녕하세요.
하늘입니다.
비가 내리는 날씨입니다.`;
console.log(text4);

// js string은 불변(immutable)이므로 [] 연산자로 접근하여 값을 수정할 수 없다.
const str = "abcd";
str[2] = "e"; // error는 안나지만
console.log(str); // print abcd

// 때문에 replace() 도 새로운 값을 반환한다. (기존을 변경하지 않는다.)
const input = "This is my car. The car is mine. Car is fater than me.";
const output = input.replace("car", "bike");
console.log({ input, output });
// {
//   input: 'This is my car. The car is mine. Car is fater than me.',
//   output: 'This is my bike. The car is mine. Car is fater than me.'
// }
// 모든 car를 변경하고 싶을 때
console.log(input.replace(/car/g, "bike"));
console.log(input.replaceAll("car", "bike")); // node v14에서는 안됨!
// Car도 변경하고 싶을 때
console.log(input.replace(/car/gi, "bike"));
