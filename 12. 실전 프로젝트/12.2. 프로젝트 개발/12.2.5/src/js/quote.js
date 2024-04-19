const API_URL = 'https://random-quote.hyobb.com/';
const $quote = document.getElementById('quote');
const quoteItem = localStorage.getItem('quote');

const nowDate = new Date();
const month = nowDate.getMonth() + 1;
const date = nowDate.getDate();

const setQuote = (result) => {
    let quote = { createdDate: `${month}-${date}`, quoteData: result };
    localStorage.setItem('quote', JSON.stringify(quote));
    $quote.textContent = `"${result}"`;
};

const getQuote = async () => {
    try {
        const data = await fetch(API_URL).then((res) => res.json());
        const result = data[1].respond;
        setQuote(result);
    } catch (err) {
        console.log(`err : ${err}`);
        setQuote('만약 하루를 성공하고 싶다면, 반드시 첫 한 시간을 성공해야 한다.');
    }
};

if (quoteItem) {
    let { createdDate, quoteData } = JSON.parse(quoteItem);
    if (createdDate === `${month}-${date}`) {
        $quote.textContent = `"${quoteData}"`;
    } else {
        getQuote();
    }
} else {
    getQuote();
}
