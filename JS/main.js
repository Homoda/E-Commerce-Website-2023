/* Scroll To Up Code */
var scrollToUp = document.getElementById("scroll-to-top");
window.onscroll = function () {
    'use strict'
    if (window.pageYOffset >= 100) {
        scrollToUp.style.display = "block";
    } else {
        scrollToUp.style.display = "none";
    }
}
scrollToUp.onclick = function () {
    'use strict'
    window.scrollTo(0, 0);
}