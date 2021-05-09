let tickerArray=[];

for(let i=1; i<30; i++){
    let ticker=document.querySelector("body > ui-layout > div > div > div.main-app-view.ng-scope > et-watchlist > div.watchlist-body > div > et-watchlist-list > section > section:nth-child(2) > section:nth-child("+i+") > et-instrument-mobile-row > et-instrument-trading-mobile-row > div > div > div.avatar-info > div.symbol").innerText
    tickerArray.push(ticker);
}

console.log(tickerArray);

window.open("https://stockinvest.us/stock/"+tickerArray[0]);
window.open("https://stockinvest.us/stock/"+tickerArray[1]);
window.open("https://stockinvest.us/stock/"+tickerArray[39]);