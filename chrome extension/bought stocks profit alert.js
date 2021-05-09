window.addEventListener("load", function(){
    console.log("loaded");
    //window.open('https://www.etoro.com/portfolio/manual-trades');

var state=["positive", "negative"];
var stateCell;
var profit;
var profitNum;
var totalTrades=document.querySelector("body > ui-layout > div > div > div.main-app-view.ng-scope > div > div.inner-wrapper.table-wrapp.ng-scope > portfolio-list-view > ui-table > ui-table-head > b").innerText;
totalTrades=totalTrades.replace("TRADES (", "");
totalTrades=totalTrades.replace(")", "");
totalTrades=parseInt(totalTrades);

console.log("totalTrades is "+totalTrades);

function play() {   
    var beepsound = new Audio(   
'https://www.soundjay.com/button/sounds/beep-01a.mp3');   
    beepsound.play();   
}   

for(i=1;i<=totalTrades;i++){

    stateCell=document.querySelector("body > ui-layout > div > div > div.main-app-view.ng-scope > div > div.inner-wrapper.table-wrapp.ng-scope > portfolio-list-view > ui-table > ui-table-body > div:nth-child("+i+") > div.ui-table-row > ui-table-body-slot > ui-table-cell."+state[0]+" > span");

     if(stateCell==null||stateCell.innerText.includes("-")){
       
        loss=document.querySelector("body > ui-layout > div > div > div.main-app-view.ng-scope > div > div.inner-wrapper.table-wrapp.ng-scope > portfolio-list-view > ui-table > ui-table-body > div:nth-child("+i+") > div.ui-table-row > ui-table-body-slot > ui-table-cell."+state[1]+" > span").innerText;
                                    
     } else {
        profit=document.querySelector("body > ui-layout > div > div > div.main-app-view.ng-scope > div > div.inner-wrapper.table-wrapp.ng-scope > portfolio-list-view > ui-table > ui-table-body > div:nth-child("+i+") > div.ui-table-row > ui-table-body-slot > ui-table-cell."+state[0]+" > span").innerText;
        profitNum=profit.replace("$", "");
        profitNum=parseFloat(profitNum);
     if(profitNum>1){
         
        play();
       console.log("profit is "+profitNum+". Perhaps you wanna take the profit");
     }
    
     }
}

console.log("profitNum is "+profitNum);
console.log("loss is "+loss);


});//end of load eventListener