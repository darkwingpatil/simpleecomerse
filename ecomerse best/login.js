var details=JSON.parse(localStorage.getItem("signup"));
document.querySelector("#form").addEventListener("submit",myfin)

function myfin(event)
{
    event.preventDefault();
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;

    var flag=false;
    for(var i=0;i<details.length;i++)
    {
        if((email==details[i]["email"])&&(password==details[i]["password"]))
        {
            flag=true;
            break;
        }
        else
        {
            flag=false;
        }
    }
    if(flag==true)
    {
        alert("login sucessfull")
        window.location.href="./main.html"
    }
    else if(flag==false)
    {
        alert("incorrect information")
    }
}