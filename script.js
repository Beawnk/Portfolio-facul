let topButton = document.getElementById('button-top');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "flex";
        topButton.style.justifyContent = "center";
        topButton.style.alignItems = "center";
    } else {
        topButton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function navbarFunction() {
    var topnav = document.getElementById("topnav");
    if (topnav.className === "nav-header width") {
        topnav.className += " responsive";
    }else {
        topnav.className = "nav-header width";
    }
}