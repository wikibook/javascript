const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const start = () => {
    delay(3000).then(() => {
        console.log('3초가 지났습니다.');
    });
};
start();
