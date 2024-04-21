let $input = document.querySelector('#name');
let $textArea = document.getElementById('major');
let $button = document.getElementById('save-btn');

$button.addEventListener('click', () => {
    console.log($input.value);
    console.log($textArea.value);
});
