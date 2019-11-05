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

$(document).ready(function () {

    $(".to-gle p").hide();
    $("#design").click(function (){
        $("#design p").toggle();
        $("#design img").toggle();
    });
    $("#development").click(function (){
        $("#development p").toggle();
        $("#development img").toggle();
    });
    $("#product").click(function (){
        $("#product p").toggle();
        $("#product img").toggle();
    })