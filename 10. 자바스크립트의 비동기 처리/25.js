const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder123.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`error : ${error}`);
    }
};

getData();
