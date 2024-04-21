const $idInput = document.getElementById('id');
const $passwordInput = document.getElementById('pwd');
const $loginButton = document.getElementById('login-btn');

$loginButton.addEventListener('click', () => {
    window.alert('로그인 성공');
    localStorage.setItem('id', $idInput.value);
    localStorage.setItem('pwd', $passwordInput.value);
    let myId = localStorage.getItem('id');
    let myPassword = localStorage.getItem('pwd');
    console.log(myId);
    console.log(myPassword);
});
