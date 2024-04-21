let colors = {
    elm1: 'green',
    elm2: 'blue',
    elm3: 'purple',
};

let { elm1, elm2, elm3, elm4 = 'yellow' } = colors;
console.log(elm1, elm2, elm3, elm4);
