
var btn =document.querySelector("#btnOpen");

btn.addEventListener("click", function(){
for(var i=0; i<5; i++) {
window.open(document.querySelectorAll("a")[i].href);

    }

})
    

var chromeStorage;

chrome.storage.sync.get("statusAndStock", function (data) {
    //alert("Get worked. Fetched " + data.statusAndStock);
    chromeStorage=data.statusAndStock;
    
    for(var i=0; i<chromeStorage.length; i++) {

        var para = document.createElement("p");
var node = document.createTextNode(chromeStorage[i]);
para.appendChild(node);
para.setAttribute("id", "pStocks")
var element = document.getElementById("chromeStorage");
element.appendChild(para);

    // document.getElementById("chromeStorage").innerHTML = chromeStorage[i];
  
    document.getElementById("chromeStorage").style.fontWeight="bold";
    
    if(document.querySelectorAll("#pStocks")[i].innerHTML.includes("Buy")){
        document.querySelectorAll("#pStocks")[i].style.color="green";
    } else if(document.querySelectorAll("#pStocks")[i].innerHTML.includes("Hold")){
        document.querySelectorAll("#pStocks")[i].style.color="coral";
    } else {
        document.querySelectorAll("#pStocks")[i].style.color="red";
    } 

}


})

//memes
/*
let memeApi = "http://alpha-meme-maker.herokuapp.com/"

fetch (memeApi)
.then(x => {
return x.json();
})
.then(json=>{

    let random=Math.round(Math.random()*30);

document.getElementById("memes").src=json.data[random].image;

document.getElementById("memeName").innerText=json.data[random].name;

})
*/

//quotes

fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0eeb3b8711msh41698bfe8e24159p1fa7c4jsnb3f8abddab7d",
		"x-rapidapi-host": "quotes15.p.rapidapi.com"
	}
})
.then(response => {
	
    return response.json();
})

.then(json=>{
    console.log(json);
    document.getElementById("quote").innerText=json.content;
})
.catch(err => {
	console.error(err);
});