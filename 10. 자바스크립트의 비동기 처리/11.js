const workA = (value, callback) => {
    setTimeout(() => {
        callback(value + 5);
    }, 5000);
};
const workB = (value, callback) => {
    setTimeout(() => {
        callback(value - 3);
    }, 3000);
};
const workC = (value, callback) => {
    setTimeout(() => {
        callback(value + 10);
    }, 10000);
};

workA(10, (resA) => {
    console.log(`workA : ${resA}`);
    workB(resA, (resB) => {
        console.log(`workB : ${resB}`);
        workC(resB, (resC) => {
            console.log(`workC : ${resC}`);
        });
    });
});
