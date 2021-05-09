//Start of output (current date)
var closeTime = document.querySelector("body > ui-layout > div > div > div.main-app-view.ng-scope > div > div.w-portfolio-table.portfolio-history-grid > div.ui-table-hat.ng-scope > div > ui-table > ui-table-body > div:nth-child(1) > ui-table-body-slot > ui-table-cell:nth-child(6) > div > p:nth-child(1)").innerText;


const monthNames = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const dateObj = new Date();
const month = monthNames[dateObj.getMonth()];
//const month = String(dateObj.getMonth()).padStart(2, '0');
const day = String(dateObj.getDate()).padStart(2, '0');
const year = dateObj.getFullYear();
const output = day + '/' + month + '/' + year;

console.log(output);


//End of  of output (current date)

//var output="09/04/2021";
var counter=1;
var res=0;
var sum=0;
for(i=1; i<=counter; i++){
    var closeTime = document.querySelector("body > ui-layout > div > div > div.main-app-view.ng-scope > div > div.w-portfolio-table.portfolio-history-grid > div.ui-table-hat.ng-scope > div > ui-table > ui-table-body > div:nth-child("+i+") > ui-table-body-slot > ui-table-cell:nth-child(6) > div > p:nth-child(1)").innerText;
    console.log("closeTime is "+closeTime);
    
    
    if (output==closeTime){
        counter++;
    
        console.log("The counter number is "+counter);

//Count the profit
        res = document.querySelector("body > ui-layout > div > div > div.main-app-view.ng-scope > div > div.w-portfolio-table.portfolio-history-grid > div.ui-table-hat.ng-scope > div > ui-table > ui-table-body > div:nth-child("+i+") > ui-table-body-slot > ui-table-cell:nth-child(7) > div > span.i-portfolio-table-marker-obj.ng-binding").innerText;
        numRes=res.replace("$", "");
        numRes = parseFloat(numRes);
        console.log("A number of transactions is "+i);
          sum=sum+numRes;
          console.log("Res is "+res);
          console.log("The profit is "+sum);
 //End of COunt profit     
      
    }
         
      else if(i>=counter){
      
          console.log("End of today's transactions");
      }
   
    }