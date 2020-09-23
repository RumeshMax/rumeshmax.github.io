document.addEventListener("DOMContentLoaded", function(event) { 
    // document.getElementById("btn_back_to_top").style.display = "none";
    $("#btn_back_to_top").hide();
});

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if (scroll > 0) {
        $("#btn_back_to_top").fadeIn();
        // document.getElementById("btn_back_to_top").style.display = "block";
    } else {
        $("#btn_back_to_top").fadeOut();
    }
});