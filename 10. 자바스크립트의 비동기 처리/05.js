const work = (callback) => {
    setTimeout(() => {
        console.log('자바스크립트');
        callback();
    }, 3000);
};

work(() => {
    console.log('종료');
});
