console.log("working?");

var section1;
var section2;
var section3;
var section4;
var section5;
var section6;

window.addEventListener('load', function() {
    section1 = document.getElementById("sause").offsetTop;
    section2 = document.getElementById("dragonfruit").offsetTop;
    section3 = document.getElementById("pineapple").offsetTop;
    section4 = document.getElementById("mango").offsetTop;
    section5 = document.getElementById("melon").offsetTop;
    section6 = document.getElementById("bun").offsetTop;
});

window.addEventListener('resize', function() {
    section1 = document.getElementById("sause").offsetTop;
    section2 = document.getElementById("dragonfruit").offsetTop;
    section3 = document.getElementById("pineapple").offsetTop;
    section4 = document.getElementById("mango").offsetTop;
    section5 = document.getElementById("melon").offsetTop;
    section6 = document.getElementById("bun").offsetTop;
});


window.onscroll = function() {myFunction()};

function myFunction() {

    document.getElementById("moving-nav").style.marginTop = window.scrollY  + 100 + "px";

    if (window.scrollY  > 150) {
        document.getElementById('moving-nav').style.opacity = "1";
    } else {
        document.getElementById('moving-nav').style.opacity = "0";
    }



    if (window.scrollY  + (window.innerHeight*0.9) > section2) {
        document.getElementById("nav-item2").className = "upTo";
    } else {
        document.getElementById("nav-item2").className = "";
    }
    
    if (window.scrollY  + (window.innerHeight*0.9) > section3) {
        document.getElementById("nav-item3").className = "upTo";
    } else {
        document.getElementById("nav-item3").className = "";
    }
    
    if (window.scrollY  + (window.innerHeight*0.9) > section4) {
        document.getElementById("nav-item4").className = "upTo";
    } else {
        document.getElementById("nav-item4").className = "";
    }
    
    if (window.scrollY  + (window.innerHeight*0.9) > section5) {
        document.getElementById("nav-item5").className = "upTo";
    } else {
        document.getElementById("nav-item5").className = "";
    }
    
    if (window.scrollY  + (window.innerHeight*0.9) > section6) {
        document.getElementById("nav-item6").className = "upTo";
    } else {
        document.getElementById("nav-item6").className = "";
    }
    
}















