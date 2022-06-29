function demo(){
    var name = document.getElementById("name").value;
    // var role = document.getElementById("role").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("contect").value;
    var password = document.getElementById("password").value;

    if(name != name.match(/[a-z]{2,}/)){
        alert("invalid name");
    }
    else if(email != email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)){
        alert("invalid email");
    }
    else if(number != number.match(/[0-9]{10,10}/)){
        alert("invalid number");
    }
    else if(password != password.match(/[0-9,a-z,A-Z]{6,12}/)){
        alert("invalid passeord")
    }
    else {
        alert("THANK YOU FOR VISITING")
    }
}