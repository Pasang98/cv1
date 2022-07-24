var RandomNumber1 = Math.floor(Math.random()*6)+1;
var RandomImage1 = "dice"+RandomNumber1+".png";
var RandomImageSource = "images/"+RandomImage1;
document.querySelectorAll("img")[0].setAttribute("src", RandomImageSource);

var RandomNumber2 =Math.floor(Math.random()*6)+1;
var RandomImage2 = "dice"+RandomNumber2+".png";
var RandomImageSource2 = "images/"+RandomImage2;
document.querySelectorAll("img")[1].setAttribute("src",RandomImageSource2);

if(RandomNumber1>RandomNumber2){
document.querySelector("h1").innerHTML= "Player 1 wins!";
}else if (RandomNumber2>RandomNumber1){
  document.querySelector("h1").innerHTML= "Player 2 wins!";
}else{document.querySelector("h1").innerHTML= "DRAW!";}
