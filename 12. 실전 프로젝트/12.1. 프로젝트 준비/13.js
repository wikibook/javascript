const $id = document.getElementById('id');
const $password = document.getElementById('pwd');
const $loginButton = document.getElementById('login-btn');

$loginButton.addEventListener('click', () => {
    window.alert('로그인 성공');
    let userInfo = { id: $id.value, pwd: $password.value };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
});
