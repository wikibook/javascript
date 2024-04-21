let arr = [1, 2, 3, 4, 5];

arr.forEach((elm, idx, array) => {
    console.log(`arr배열의 모든 요소 : ${array}`);
    console.log(`${idx} 번째 요소는 ${elm} 입니다.`);
});
