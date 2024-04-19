function compare(num) {
    if (num === 0) {
        console.log('num의 값이 0입니다.');
    } else if (num < 0) {
        console.log('num의 값이 0보다 작습니다');
    } else {
        if (num >= 10) {
            console.log('num의 값이 10보다 크거나 같습니다.');
        } else {
            console.log('num의 값이 0보다 크고 10보다 작습니다.');
        }
    }
}

compare(15);
