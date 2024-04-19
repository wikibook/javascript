const $bookmarkBar = document.getElementById('bookmark-bar'); //북마크 바
const $bookmarkCloseBtn = document.getElementById('bookmark-close-btn'); // 북마크 닫기 버튼
const $bookmarkOpenBtn = document.getElementById('bookmark-open-btn'); // 북마크 열기 버튼
const $bookmarkCloseText = document.getElementById('bookmark-close-btn-text'); //북마크 닫기 텍스트
const $bookmarkOpenText = document.getElementById('bookmark-open-btn-text'); //북마크 열기 텍스트

const isBookmarkBarOpen = localStorage.getItem('isBookmarkBarOpen');

if (isBookmarkBarOpen === 'close') {
    //현재 북마크 바가 닫혀있다면
    $bookmarkBar.style.display = 'none';
    $bookmarkCloseBtn.style.display = 'none';
    $bookmarkOpenBtn.style.display = 'flex';
} else {
    //현재 북마크 바가 열려있다면
    $bookmarkBar.style.display = 'block';
    $bookmarkCloseBtn.style.display = 'flex';
    $bookmarkOpenBtn.style.display = 'none';
}

const bookmarkBarToggle = () => {
    let isBookmarkBarOpen = localStorage.getItem('isBookmarkBarOpen');
    if (isBookmarkBarOpen === 'close') {
        //isBookmarkBarOpen 값이 close일 경우
        //닫힘 -> 열림
        localStorage.setItem('isBookmarkBarOpen', 'open');
        $bookmarkBar.style.display = 'block';
        $bookmarkCloseBtn.style.display = 'flex';
        $bookmarkOpenBtn.style.display = 'none';
        return;
    }
    //isBookmarkBarOpen 값이 없거나, 값이 open일 경우
    //열림 -> 닫힘
    localStorage.setItem('isBookmarkBarOpen', 'close');
    $bookmarkBar.style.display = 'none';
    $bookmarkCloseBtn.style.display = 'none';
    $bookmarkOpenBtn.style.display = 'flex';
};

$bookmarkCloseText.addEventListener('click', bookmarkBarToggle);
$bookmarkOpenText.addEventListener('click', bookmarkBarToggle);
