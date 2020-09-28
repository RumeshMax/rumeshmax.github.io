document.addEventListener("DOMContentLoaded", function(event) {
    toggleBackToTop();

    $(".wrapper").scroll(function(){
        toggleBackToTop();
    });
});

function toggleBackToTop() {
    let scroll = $(".wrapper").scrollTop();
        
    if (scroll > 0) {
        $("#btn_back_to_top").fadeIn();
    } else {
        $("#btn_back_to_top").fadeOut();
    }
}


