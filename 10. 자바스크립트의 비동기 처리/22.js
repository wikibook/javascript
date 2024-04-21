const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
};

getData();
