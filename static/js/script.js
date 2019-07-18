var isEnable = true;

$(document).ready(function() {
    $("#news").hide();

    $("#closeNotif").click(function(){
        $("#notif").slideUp("slow");
    });

    $("#closeNews").click(function(){
        $("#news").slideUp("slow");
        isEnable = false;
        setTimeout(function() {
            isEnable = true;
        }, 600000);
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $("#notif").addClass("sticky");
        } else {
            $("#notif").removeClass("sticky");
        }
        if($(window).scrollTop() > 150 && isEnable){
            $("#news").show("slow");
        }
    });
});