let numbers = [1, 100, 25, 50];
let sum = numbers.reduce((acc, cur, idx) => {
    return acc + cur;
}, 0);

console.log(sum);
