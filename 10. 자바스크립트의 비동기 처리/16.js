const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('javascript');
        }, ms);
    });
};

const start = async () => {
    let result = await delay(3000);
    console.log(result);
};

start();
