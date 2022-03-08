$(document).ready(function($) {
    "use strict";
    // $(".menu-btn").click(function() {
    //     (".navbar-right").addClass("active")
    // })
}(jQuery));

const body = document.querySelector("body")
const navbar = document.querySelector(".nav")
const menuBtn = document.querySelector("#menu-btn")
const navlinks = document.querySelector("#navbar-right")
const cancelBtn = document.querySelector(".cancel-btn");

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
menuBtn.onclick = () => {
    body.classList.add("stop")
}
cancelBtn.onclick = () => {
    body.classList.remove("stop")
}



document.getElementById("menu-btn").addEventListener("click", abc);

function abc() {
    document.getElementById("navbar-right").classList.add("active");
    document.getElementById("navbar-right").classList.remove("hide");
}

document.getElementById("cancel-btn").addEventListener("click", xyz);

function xyz() {
    document.getElementById("navbar-right").classList.add("hide");
}