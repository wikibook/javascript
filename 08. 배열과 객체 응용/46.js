const blueToy = {
    type: "bear",
    price: 15000,
    color: "blue",
    };

const {...rest, type } = blueToy;
console.log(rest, type);