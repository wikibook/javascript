const workA = () => {
    setTimeout(() => {
        console.log('workA');
    }, 5000);
};
const workB = () => {
    setTimeout(() => {
        console.log('workB');
    }, 3000);
};
const workC = () => {
    console.log('workC');
};

workA();
workB();
workC();
