var box=document.createElement("div");
var box2=document.createElement("div");
var h3=document.createElement("h3");
h3.innerText="Signup";
h3.addEventListener("click",function(){
    window.location.href="./signup.html";
})
var h4=document.createElement("h3");
h4.innerText="Login";
h4.addEventListener("click",function(){
    window.location.href="./login.html";
})
var h5=document.createElement("h3");
h5.innerText="Mens";
h5.addEventListener("click",function(){
    window.location.href="./mens.html";
})
var h6=document.createElement("h3");
h6.addEventListener("click",function(){
    window.location.href="./womens.html";
})
h6.innerText="Womens";
box2.id="box2";
box2.append(h3,h4,h5,h6);
box.append(box2);
document.querySelector("#conatiner").append(box);
