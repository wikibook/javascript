let numbers = [1, 100, 25, 50];
numbers.reduce((acc, cur, idx) => {
    console.log(acc, cur, idx);
    return acc + cur;
}, 0);
