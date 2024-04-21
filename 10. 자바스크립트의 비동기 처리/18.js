const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('javascript');
        }, ms);
    });
};

const start = async () => {
    try {
        let result = await delay(3000);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

start();
