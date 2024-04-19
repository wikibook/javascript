const sayHello = (name, callback) => {
    console.log(`Hello ${name}!`);
    callback();
};

const sayGoodBye = () => {
    console.log('Good Bye!');
};

sayHello('hyobin', sayGoodBye);
