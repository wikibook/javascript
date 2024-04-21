let nowDate = new Date();
let year = nowDate.getFullYear();
let month = nowDate.getMonth() + 1;
let date = nowDate.getDate();
let day = nowDate.getDay();

console.log(`${year}년 ${month}월 ${date}일 ${day}요일`);
