const person = {
    name: '홍길동',
    age: 20,
    print: function () {
        console.log(`제 이름은 ${this.name}입니다.`);
    },
};

person.print();
