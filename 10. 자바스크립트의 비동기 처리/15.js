const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${ms / 1000}초가 지났습니다.`);
        }, ms);
    });
};

const start = async () => {
    delay(3000).then((res) => {
        console.log(res);
    });
};
start();
