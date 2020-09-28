document.addEventListener("DOMContentLoaded", function(event) {
    let scroll = $(".wrapper").scrollTop();
        
    if (scroll > 0) {
        $("#btn_back_to_top").fadeIn();
    } else {
        $("#btn_back_to_top").fadeOut();
    }

    $(".wrapper").scroll(function(){
        let scroll = $(".wrapper").scrollTop();
        
        if (scroll > 0) {
            $("#btn_back_to_top").fadeIn();
        } else {
            $("#btn_back_to_top").fadeOut();
        }
    });
});


