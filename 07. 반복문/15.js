let person = {
    name: '홍길동',
    age: 25,
    height: 180,
};

for (let key in person) {
    console.log(`${key} : ${person[key]}`);
}
