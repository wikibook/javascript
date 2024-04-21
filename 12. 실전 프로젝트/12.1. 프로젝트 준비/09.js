const $idInput = document.getElementById('id');
const $passwordInput = document.getElementById('pwd');
const $loginButton = document.getElementById('login-btn');

$loginButton.addEventListener('click', () => {
    window.alert('로그인 성공');
    console.log($idInput.value);
    console.log($passwordInput.value);
});
