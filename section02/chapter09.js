// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name: 'bize', hobby: '테니스'},
    {name: '김효빈', hobby: '테니스'},
    {name: '홍길동', hobby: '독서'},

];

const tennisPeople = arr1.filter(
    (item) => item.hobby === '테니스'
);

// console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하며 각각 콜백 함수를 실행, 그 결과값을 모아 새로운 배열로 반환
let arr2 = [1, 2, 3]
arr2.map((item, idx, arr) => {
    return item * 2;
});

let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = [1, 3, 2];
arr3.sort((a, b) => a - b);

// console.log(arr3);

// 4. toSorted (가장 최근에 추가된 함수)<-이건 나도 첨보는데?
// 정렬된 새로운 배열을 반환하는 메서드
let arr4 = ['c', 'a', 'b'];
const sorted = arr4.toSorted();

// console.log(arr4);
// console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐 반환하는 그런 메서드
let arr6 = ['hi', 'im', 'winterlood'];
const joined = arr6.join(' ');
console.log(joined);
