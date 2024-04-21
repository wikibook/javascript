let $button = document.createElement('button');
$button.id = 'button';
$button.classList.add('button');
$button.textContent = '버튼';

let $todayInfo = document.querySelector('div.today-info');
$todayInfo.appendChild($button);

console.log($todayInfo);
