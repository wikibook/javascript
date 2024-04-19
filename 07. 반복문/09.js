let person = {
    name: '홍길동',
    age: 25,
    height: 180,
};

let newArray = Object.keys(person);

for (let i = 0; i < newArray.length; i++) {
    let nowKey = newArray[i];
    console.log(`key : ${nowKey}, value : ${person[nowKey]}`);
}
