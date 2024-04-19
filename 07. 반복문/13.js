let person = {
    name: '홍길동',
    age: 25,
    height: 180,
};

let newArray = Object.entries(person);

for (let i = 0; i < newArray.length; i++) {
    let nowKey = newArray[i][0];
    let nowValue = newArray[i][1];
    console.log(`key : ${nowKey}, value : ${nowValue}`);
}
