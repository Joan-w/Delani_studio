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
    });

    $(".0").mouseenter(function(){
        $(".text-p").show(1000);
    });
    $(".0").mouseleave(function(){
        $(".text-p").hide(500);
    });
    $(".1").mouseenter(function(){
        $(".text-p1").show(1000);
    });
    $(".1").mouseleave(function(){
        $(".text-p1").hide(500);
    });
    $(".2").mouseenter(function(){
        $(".text-p2").show(1000);
    });
    $(".2").mouseleave(function(){
        $(".text-p2").hide(500);
    });
    $(".3").mouseenter(function(){
        $(".text-p3").show(1000);
    });
    $(".3").mouseleave(function(){
        $(".text-p3").hide(500);
    });
    $(".4").mouseenter(function(){
        $(".text-p4").show(1000);
    });
    $(".4").mouseleave(function(){
        $(".text-p4").hide(500);
    });
    $(".5").mouseenter(function(){
        $(".text-p5").show(1000);
    });
    $(".5").mouseleave(function(){
        $(".text-p5").hide(500);
    });
    $(".6").mouseenter(function(){
        $(".text-p6").show(1000);
    });
    $(".6").mouseleave(function(){
        $(".text-p6").hide(500);
    });
    $(".7").mouseenter(function(){
        $(".text-p7").show(1000);
    });
    $(".7").mouseleave(function(){
        $(".text-p7").hide(500);
    });


    
});