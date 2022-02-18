document.querySelector("#form").addEventListener("submit",mydata)
var arr=JSON.parse(localStorage.getItem("signup"))||[];
function mydata(event)
{
    event.preventDefault();
    var pass=document.querySelector("#password").value;
    var pass1=document.querySelector("#password1").value;
    if(pass==pass1)
    {
        var obj={
            email:document.querySelector("#email").value,
            usrnme:document.querySelector("#name").value,
            password:pass
        }
    }
    else
    {
        alert("password entered not matching")
    }
    arr.push(obj);
    localStorage.setItem("signup",JSON.stringify(arr));

    window.location.href="login.html";
}