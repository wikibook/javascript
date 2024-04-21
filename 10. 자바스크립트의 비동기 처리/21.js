const response = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

console.log(response);
