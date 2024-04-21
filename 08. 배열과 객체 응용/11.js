let colors = [
    { id: 1, color: 'green' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'purple' },
];

let idx = colors.find((elm) => elm.color === 'purple');
console.log(idx);
