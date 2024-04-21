const blueToy = {
    type: 'bear',
    price: 15000,
    color: 'blue',
};

const { type, ...rest } = blueToy;
console.log(type, rest);
