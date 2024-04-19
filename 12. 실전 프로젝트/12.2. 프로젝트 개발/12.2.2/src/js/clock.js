const $date = document.getElementById('today-date'); //오늘 날짜
const $time = document.getElementById('now-time'); //현재 시각

const modifyNumber = (number) => {
    return number < 10 ? '0' + number : number;
};

const setNowDate = (month, date, day) => {
    $date.textContent = `${month}월 ${date}일 ${day}`;
};

const getNowDate = () => {
    const nowDate = new Date();
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    let month = modifyNumber(nowDate.getMonth() + 1);
    let date = modifyNumber(nowDate.getDate());
    let day = week[nowDate.getDay()];
    setNowDate(month, date, day);
};

const setNowTime = (hour, minute) => {
    $time.textContent = `${hour}:${minute}`;
};

const getNowTime = () => {
    const nowDate = new Date();
    let hour = modifyNumber(nowDate.getHours());
    let minute = modifyNumber(nowDate.getMinutes());
    setNowTime(hour, minute);
};

getNowDate();
getNowTime();
setInterval(getNowTime, 1000);
