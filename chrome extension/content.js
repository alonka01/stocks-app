let test=[];
let siteUrl ="https://www.zacks.com/stock/quote/";
//Check the whole content of chrome storage
chrome.storage.sync.get(null, function (data) { console.log("Everything that is stored in chrome storage "+ JSON.stringify(data)) });

  //Clear chrome storage
  //chrome.storage.sync.clear();


let tickerArray=["MSFT", "AAPL"];

/*

let tickerArray=["AXTA","T","ABEV","DIS","GSK.L","SONY","SPCE","KO","IBM","AAL","MRO","DAL","LUV","BA","CSCO","INTC","SU","ACB","DKNG","HMMJ","TLRY","CRON","CGC","OIL","BIIB","APHA","ASXC","ABNB","PLTR","Ryanair","NVAX","DASH.US","NET","SNOW","NSDQ100","LMND","CCL","ETHEREUM","MPC"];
*/

/*
function openEtoro(){
    window.open("https://www.etoro.com/watchlists");
tickerArray=localStorage.getItem("tickerArray");

}
*/


let statusArray=[];
let stockNameArray=[];
let counter=0;
    
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

let btn =document.querySelector("#btnRun");
    
    btn.addEventListener("click", function(){
        openPage();
    });


    function openPage(){

           // for (var i=0; i<tickerArray.length; i++){
            
              
            const win=window.open(siteUrl+tickerArray[0], "_blank");

            // variable for keeping track of array position(urls)
let a = 1;
// create interval with 10seconds delay and keep 
// interval reference to clear the event in future
let int = setInterval(() => {
 // update the location with next array value
 win.location = siteUrl+tickerArray[a];
 // check value of i and increment, if reached the max value then clear the interval
 if (a++ >= tickerArray.length) clearInterval(int); 
}, 10000)

              console.log(siteUrl+tickerArray[i])
              ;
           
    
                      
         //   }//end of loop
     
    }//end of open page

 

        //start of insert
        for (var i=0; i<tickerArray.length; i++){
        if(window.location.href==siteUrl+tickerArray[i]){
    alert("if st worked")

  document.body.style.backgroundColor = "black";

  window.addEventListener('load', function () {
      
        
    
      let status=document.querySelector("#premium_research > div > dl:nth-child(1) > dd > strong").innerText;
      statusArray.push(status);
      
      let stock=document.querySelector("#quote_ribbon_v2 > div.quote_summary > header > h1").innerText;
      stockNameArray.push(stock);
  



     
      test=statusArray+" : "+stockNameArray;
/*
      var a = [];
a.push(JSON.parse(localStorage.getItem('statusAndStock')));
localStorage.setItem('statusAndStock', JSON.stringify(a));
*/
 

let a = [];
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
  
      })
     
}//end of if
        }//end of for
        //end of insert
        
    