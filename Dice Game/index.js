//To check if the js has been linked correctly to our html
//alert("I'm working");

var num1=Math.floor((Math.random()*6)+1);
var num2= Math.floor((Math.random()*6)+1);

//This was my idea.. but for this i need to have 12 statemenets
/*
if(num1==1){
    document.querySelector(".img1").setAttribute("src", "./dice1.png");
}
*/

//Since, we need to pass source we can concatenate and create desired string to pass
var img1= "dice"+num1+".png";
var img2= "./dice"+num2+".png";

document.querySelectorAll("img")[0].setAttribute("src",img1);
document.querySelectorAll("img")[1].setAttribute("src",img2);

if(num1>num2){
    document.querySelector("h1").textContent="Player 1 WINS"
}
else if(num1==num2){
    document.querySelector("h1").textContent="DRAW !"
}
else{
    document.querySelector("h1").textContent="Player 2 WINS"
}