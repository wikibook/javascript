function compare(num) {
    if (num === 0) return 'num의 값이 0입니다.'; // ➊
    if (num < 0) return 'num의 값이 0보다 작습니다.'; // ➋
    if (num >= 10) return 'num의 값이 10보다 크거나 같습니다.'; // ➌
    return 'num의 값이 0보다 크고 10보다 작습니다'; // ➍
}

console.log(compare(15));
