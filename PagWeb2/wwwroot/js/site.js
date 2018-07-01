// Write your JavaScript code.

//sticky navbar
window.onscroll = function () { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed-top")
    } else {
        navbar.classList.remove("fixed-top");
    }
} 
