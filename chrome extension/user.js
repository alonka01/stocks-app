// Start of save to localStorage

var a = [];
a.push(JSON.parse(localStorage.getItem('session')));
localStorage.setItem('session', JSON.stringify(a));

function SaveDataToLocalStorage(status, ticker) {
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('session')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(status+ticker);
    // Alert the array value
    alert(a);
    // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('session', JSON.stringify(a));
}

//End of save to localStorage
/*
window.open("https://stockinvest.us/stock/NIO", "_self")
var ticker=document.querySelector("body > div.page > div > div > div > div.col-lg-9 > div.card.card-shadow.mb-10 > div > div.ticker-header-flex-container > div.ticker-header-left-content > h1 > span > a > strong").innerText;
var status=document.querySelector("#predictions > div > div:nth-child(1) > div.col-md-3 > div.row.pr-20.pl-15-md.pr-15-md > div > span.btn-group.w-100p > a.btn.btn-sm.btn-secondary.bg-warning.w-100p").innerText;
SaveDataToLocalStorage(status, ticker);
*/
window.open("https://stockinvest.us/stock/AAPL", "_self")
var ticker=document.querySelector("body > div.page > div > div > div > div.col-lg-9 > div.card.card-shadow.mb-10 > div > div.ticker-header-flex-container > div.ticker-header-left-content > h1 > span > a > strong").innerText;
var status=document.querySelector("#predictions > div > div:nth-child(1) > div.col-md-3 > div.row.pr-20.pl-15-md.pr-15-md > div > span.btn-group.w-100p > a.btn.btn-sm.btn-secondary.bg-warning.w-100p").innerText;
SaveDataToLocalStorage(status, ticker);