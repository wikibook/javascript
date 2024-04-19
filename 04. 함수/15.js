function print() {
    for (var i = 0; i < 3; i++) {
        console.log(`블록 스코프 : ${i}`);
    }
    console.log(i);
}

print();
