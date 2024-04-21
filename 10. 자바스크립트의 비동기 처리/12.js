const workA = (value) => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(value + 5);
        }, 5000);
    });
    return promise;
};

const workB = (value) => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(value - 3);
        }, 3000);
    });
    return promise;
};

const workC = (value) => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(value + 10);
        }, 10000);
    });
    return promise;
};

workA(10).then((resA) => {
    console.log(`workA : ${resA}`);
    workB(resA).then((resB) => {
        console.log(`workB : ${resB}`);
        workC(resB).then((resC) => {
            console.log(`workC : ${resC}`);
        });
    });
});
