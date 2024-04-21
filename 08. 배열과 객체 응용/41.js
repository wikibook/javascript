const toy = {
    type: 'bear',
    price: 15000,
};

const blueToy = {
    ...toy,
    color: 'blue',
};

const yellowToy = {
    ...toy,
    color: 'yellow',
};

console.log(blueToy);
console.log(yellowToy);
