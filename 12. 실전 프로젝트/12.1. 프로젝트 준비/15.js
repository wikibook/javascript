const $idInput = document.getElementById('id');
const $passwordInput = document.getElementById('pwd');
const $loginButton = document.getElementById('login-btn');

$loginButton.addEventListener('click', () => {
    window.alert('로그인 성공');
    let userInfo = { id: $idInput.value, pwd: $passwordInput.value };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    let savedUserInfo = localStorage.getItem('userInfo');
    console.log(typeof savedUserInfo);
});
