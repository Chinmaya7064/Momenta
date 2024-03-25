var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-65px";
        document.querySelector(".dropdown-menu").click();
    }
    prevScrollpos = currentScrollPos;
}

const accountbutton = document.querySelector(".login-signup")
accountbutton.onclick = function () {
    window.location.href = "/login"
}

let data;
function getId(clicked) {
    var idData = "";
    idData += "e" + clicked;
    var selectedEvent = document.getElementById("e" + clicked).innerHTML;
    window.location.href = "registration.html?event=" + selectedEvent;
}

// Get the event parameter from the URL
var urlParams = new URLSearchParams(window.location.search);
var selectedEvent = urlParams.get('event');
// Populate the dropdown with the selected event
document.getElementById("inputEvent").innerHTML = "<option value='" + selectedEvent + "'>" + selectedEvent + "</option>";
// Select the option by default
document.getElementById("inputEvent").value = selectedEvent;

// const serviceSection = getElementById("services")
// const aboutSection = getElementById("about")
// const momentsSection = getElementById("moments")
function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}