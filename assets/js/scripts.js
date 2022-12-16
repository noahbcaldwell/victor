// Menu toggle
$(document).ready(function(){
    if ( $(window).width() <= 480 ) {
      $("#toggleOpen").click(function(){
        $("#sidebar").css({"transition": "400ms", "margin-left": "0px"});
      });
      $("#toggleClose").click(function(){
        $("#sidebar").css({"transition": "400ms", "margin-left": "-100vw"});
      });
    } else {
      $("#toggleOpen").click(function(){
        $("#sidebar").css({"transition": "400ms", "margin-left": "0px"});
      });
      $("#toggleClose").click(function(){
        $("#sidebar").css({"transition": "400ms", "margin-left": "-350px"});
      });
    }
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