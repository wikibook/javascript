const person = {
    name: '홍길동',
    age: 20,
    print: function () {
        console.log('hello world');
    },
};

person.print();
person['print']();
