const print = (a, b, ...rest) => {
    console.log(a, b);
    console.log(rest);
};

const numbers = [1, 2, 3, 4, 5, 6];
print(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]);
