function myFunction() {
    var login = document.getElementById('login').value;
    var pass = document.getElementById('password').value;
    
    if (login!=="" && pass!=="") {
	   document.querySelector('.bg-modal').style.display = "flex";
       document.getElementById("loginOut").innerHTML = login;
       document.getElementById("passOut").innerHTML = pass; 
    }    
}

function myClose() {
    document.querySelector('.bg-modal').style.display = "none";
}