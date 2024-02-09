function validate(){
    var password=document.getElementById("pass");
    var length = document.getElementById("length");
    window.location.replace("newpage.html");
    if(password.ariaValueMax.length>=8){
        alert("Log-in Successfull");
        return false;
    }
    else{
        alert("Log-in Failed");
    }
}