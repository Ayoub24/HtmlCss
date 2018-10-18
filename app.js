let myFunction = () => {
    let FName = document.getElementById('FirstName').value;
    let LName = document.getElementById('LastName').value;   
    document.querySelector('.bg-modal').style.display = "flex";
    document.getElementById("full_name").innerHTML = FName +" "+ LName;
}

let myClose = () => {
    document.querySelector('.bg-modal').style.display = "none";
}

//
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