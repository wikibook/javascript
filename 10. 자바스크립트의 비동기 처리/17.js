const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('javascript');
        }, ms);
    });
};

const start = () => {
    let result = await delay(3000);
    console.log(result);
};
start();
