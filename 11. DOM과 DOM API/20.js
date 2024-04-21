let $season = document.createElement('div');
$season.className = 'season';
$season.id = 'season';

let $seasonText = document.createTextNode('가을');

let $todayInfo = document.querySelector('div.today-info');
$todayInfo.appendChild($season);
$season.appendChild($seasonText);

console.log($todayInfo);
