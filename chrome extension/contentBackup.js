let test=[];

//Check the whole content of chrome storage
chrome.storage.sync.get(null, function (data) { console.log("Everything that is stored in chrome storage "+ JSON.stringify(data)) });

  //Clear chrome storage
  //chrome.storage.sync.clear();

  
let tickerArray=["MSFT", "AAPL", "BYND", "NIO", "DIS", "T"];
/*
let tickerArray=["AXTA","T","ABEV","DIS","GSK.L","SONY","SPCE","KO","IBM","AAL","MRO","DAL","LUV","BA","CSCO","INTC","SU","ACB","DKNG","HMMJ","TLRY","CRON","CGC","OIL","BIIB","APHA","ASXC","ABNB","PLTR","Ryanair","NVAX","DASH.US","NET","SNOW","NSDQ100","LMND","CCL","ETHEREUM","MPC"];
*/

/*
function openEtoro(){
    window.open("https://www.etoro.com/watchlists");
tickerArray=localStorage.getItem("tickerArray");

}
*/

/*
function getMyStocks(){

for(let i=1; i<30; i++){
    setTimeout(function(){ 
    let ticker=document.querySelector("body > ui-layout > div > div > div.main-app-view.ng-scope > et-watchlist > div.watchlist-body > div > et-watchlist-list > section > section:nth-child(2) > section:nth-child("+i+") > et-instrument-mobile-row > et-instrument-trading-mobile-row > div > div > div.avatar-info > div.symbol").innerText;
    tickerArray.push(ticker);
}, 10000);
}

}


 if(window.location.href=="https://www.etoro.com/watchlists"){
    window.addEventListener('load', function () {
    getMyStocks();
    })
}*/

let statusArray=[];
let stockNameArray=[];
    
(function myFunction() {
    var btn = document.createElement("BUTTON");
    var node = document.createTextNode("Run stock scanner");
    btn.appendChild(node);
    btn.id="btnRun";
    btn.style.position="absolute";
    btn.style.backgroundColor="rgb(233, 141, 191)";
    btn.style.border="none";
    btn.style.top="100px";
    btn.style.cursor="pointer";
    btn.style.padding="1%";
    btn.style.color="white";
    document.body.appendChild(btn);
    
})();

var btn =document.querySelector("#btnRun");
    
    btn.addEventListener("click", function(){
        openPage();
    });


    function openPage(){

        for (var i=0; i<tickerArray.length; i++){
        window.open("https://www.zacks.com/stock/quote/"+tickerArray[i]);

        
// request permission on page load
document.addEventListener('DOMContentLoaded', function() {
    if (!Notification) {
     alert('Desktop notifications not available in your browser. Try Chromium.');
     return;
    }
   
    if (Notification.permission !== 'granted')
     Notification.requestPermission();
   });
   
   
   function notifyMe() {
    if (Notification.permission !== 'granted')
     Notification.requestPermission();
    else {
     var notification = new Notification('Notification title', {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: 'Hey there! You\'ve been notified!',
     });
   
    }
   }


    }
}

for (var i=0; i<tickerArray.length; i++){
    if(window.location.href=="https://www.zacks.com/stock/quote/"+tickerArray[i]){

        document.body.style.backgroundColor = "black";

        window.addEventListener('load', function () {
            setTimeout(function(){  
              
          
            let status=document.querySelector("#premium_research > div > dl:nth-child(1) > dd > strong").innerText;
            statusArray.push(status);
            
            let stock=document.querySelector("#quote_ribbon_v2 > div.quote_summary > header > h1").innerText;
            stockNameArray.push(stock);
        

          

        }, 6000);

        setTimeout(function(){  
           
            test=statusArray+" : "+stockNameArray;
/*
            var a = [];
a.push(JSON.parse(localStorage.getItem('statusAndStock')));
localStorage.setItem('statusAndStock', JSON.stringify(a));
*/
       

    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('statusAndStock')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(test);
    // Alert the array value
    alert(a);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('statusAndStock', JSON.stringify(a));


            //localStorage.setItem("statusAndStock", test);

         
            chrome.storage.sync.set({ "statusAndStock": a }, function(){
                alert("Set worked. Saved "+test);
            })
        
            chrome.storage.sync.get("statusAndStock", function (data) {
                alert("Get worked. Fetched " + data.statusAndStock);
            })
        
        }, 7000);

        setTimeout(function(){  
        
           
            window.close();
        }, 8000);

        
            })
           
    }

}
  


/*
    let tickerArray=["MSFT", "AAPL", "BYND"];

    let statusArray=[];
    let stockNameArray=[];
    

    (function myFunction() {
        var btn = document.createElement("BUTTON");
        var node = document.createTextNode("Run stock scanner");
        btn.appendChild(node);
        btn.id="btnRun";
        document.body.appendChild(btn);
        
    })();

    var btn =document.querySelector("#btnRun");
    
    btn.addEventListener("click", function(){

        document.body.style.backgroundColor = "black";
    for(var i=0; i<tickerArray.length; i++) {
    window.open("https://www.zacks.com/stock/quote/"+tickerArray[i]);
    //window.open("https://stockinvest.us/stock/"+tickerArray[i]);
    window.addEventListener('load', function () {
       
    let status=document.querySelector("#premium_research > div > dl:nth-child(1) > dd > strong").innerText;
    statusArray.push(status);
    
    let stock=document.querySelector("#quote_ribbon_v2 > div.quote_summary > header > h1").innerText;
    stockNameArray.push(stock);
    setTimeout(function(){  
    alert(statusArray+stockNameArray);
}, 9000);
    })
    window.close();
        }
        alert(statusArray+stockNameArray);
    })

*/

    

// Start of save to localStorage
/*
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
*/
//End of save to localStorage
/*
var counter = 0;
alert("It runs");
window.open("https://www.zacks.com/stock/quote/AAPL");
counter = 1;
var ticker=document.querySelector("body > div.page > div > div > div > div.col-lg-9 > div.card.card-shadow.mb-10 > div > div.ticker-header-flex-container > div.ticker-header-left-content > h1 > span > a > strong").innerText;
var status=document.querySelector("#predictions > div > div:nth-child(1) > div.col-md-3 > div.row.pr-20.pl-15-md.pr-15-md > div > span.btn-group.w-100p > a.btn.btn-sm.btn-secondary.bg-warning.w-100p").innerText;
SaveDataToLocalStorage(status, ticker);
window.open("https://www.zacks.com/stock/quote/MSFT");
counter = 2;
var ticker=document.querySelector("body > div.page > div > div > div > div.col-lg-9 > div.card.card-shadow.mb-10 > div > div.ticker-header-flex-container > div.ticker-header-left-content > h1 > span > a > strong").innerText;
var status=document.querySelector("#predictions > div > div:nth-child(1) > div.col-md-3 > div.row.pr-20.pl-15-md.pr-15-md > div > span.btn-group.w-100p > a.btn.btn-sm.btn-secondary.bg-warning.w-100p").innerText;

SaveDataToLocalStorage(status, ticker);
window.open("https://www.zacks.com/stock/quote/BYND");
var ticker=document.querySelector("body > div.page > div > div > div > div.col-lg-9 > div.card.card-shadow.mb-10 > div > div.ticker-header-flex-container > div.ticker-header-left-content > h1 > span > a > strong").innerText;
var status=document.querySelector("#predictions > div > div:nth-child(1) > div.col-md-3 > div.row.pr-20.pl-15-md.pr-15-md > div > span.btn-group.w-100p > a.btn.btn-sm.btn-secondary.bg-warning.w-100p").innerText;

SaveDataToLocalStorage(status, ticker);
*/





/*
      document.getElementById("submit").addEventListener("click", myFunc);

function myFunc() {
    window.open("https://stockinvest.us/stock/AAPL");
    window.open("https://stockinvest.us/stock/MSFT");
    window.open("https://www.zacks.com/stock/quote/BYND");
}
*/