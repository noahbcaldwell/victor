// Menu toggle
$(document).ready(function(){
    $("#toggle-container").click(function(){
      $("#sidebar").css({"transition": "400ms", "margin-left": "0px"});
    });
    $("#toggle-container-close").click(function(){
      $("#sidebar").css({"transition": "400ms", "margin-left": "-350px"});
    });
});

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});