function myFunction() {
    var FName = document.getElementById('FirstName').value;
    var LName = document.getElementById('LastName').value;   
    document.querySelector('.bg-modal').style.display = "flex";
    document.getElementById("full_name").innerHTML = FName +" "+ LName;      
}

function myClose() {
    document.querySelector('.bg-modal').style.display = "none";
}

$(document).ready(function (){
    validate();
    $('#FirstName, #LastName').change(validate);
});

function validate(){
    if ($('#FirstName').val().length   >   4   &&
        $('#LastName').val().length  >   4 ) {
        $("input[type=button]").prop("disabled", false);
    }
    else {
        $("input[type=button]").prop("disabled", true);
    }
}