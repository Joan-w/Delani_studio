function receiveMess(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value; 
    var message = document.getElementById("text_a").value;

    if (name == "" || email == "" || message == "") {
        alert("Please do fill the form correctly.");
    } else {
        alert("We have received your message and we'll be intouch. Thank you.");
    }

};