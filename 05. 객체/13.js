const dog = {
    name: '멍멍이',
    age: 2,
    color: 'brown',
};

delete dog.color;
delete dog['age'];

console.log(dog);
