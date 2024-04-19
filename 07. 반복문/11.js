let person = {
    name: '홍길동',
    age: 25,
    height: 180,
};

let newArray = Object.values(person);

for (let i = 0; i < newArray.length; i++) {
    let nowValue = newArray[i];
    console.log(`value : ${nowValue}`);
}
