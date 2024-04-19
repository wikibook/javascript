const $search = document.getElementById('search-input');

const moveResultPage = () => {
    let searchWord = $search.value;
    window.location.href = `https://google.com/search?q=${searchWord}`;
    searchWord = '';
};

const enterKey = (event) => {
    if (event.code === 'Enter') {
        moveResultPage();
    }
};

$search.addEventListener('keypress', (event) => {
    enterKey(event);
});
