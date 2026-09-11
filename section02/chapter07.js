// 6가지 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드(길이 반환)
let arr1 = [1, 2, 3, 4, 5];
const newLength = arr1.push(6, 7, 8, 9);

// console.log(arr1);
// console.log(newLength);

// 2. pop
// 배열의 맨 뒤 요소를 제거, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// console.log(arr2);
// console.log(poppedItem);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3, 4, 5];
const shiftedItem = arr3.shift();
// console.log(shiftedItem, arr3);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드(길이 반환)
let arr4 = [1, 2, 3, 4, 5];
const newLength2 = arr4.unshift(0);
// console.log(arr4, newLength2);

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내어 새로운 배열 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-3);

// console.log(sliced3);

// 6. concat
// 두 개의 서로 다른 배열을 이어붙여 새 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);