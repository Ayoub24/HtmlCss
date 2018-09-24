function myFunction() {
    var FName = document.getElementById('FirstName').value;
    var LName = document.getElementById('LastName').value;
    
    if (FName !== "" && LName !== "") {
	   document.querySelector('.bg-modal').style.display = "flex";
       console.log(FName);
       document.getElementById("full_name").innerHTML = FName +" "+ LName;
    }    
}

function myClose() {
    document.querySelector('.bg-modal').style.display = "none";
}