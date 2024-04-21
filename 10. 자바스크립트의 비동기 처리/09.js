const executor = (resolve, reject) => {
    setTimeout(() => {
        resolve('성공');
        reject('실패');
    }, 3000);
};

const promise = new Promise(executor);
promise.then(
    (result) => {
        console.log(result);
    },
    (error) => {
        console.log(error);
    }
);
