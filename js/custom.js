/*global $, console, alert, confirm, prompt, const*/
var secondHand = document.querySelector(".second-hand"),
    minHand = document.querySelector(".min-hand"),
    hourHand = document.querySelector(".hour-hand"),
    secondNum = document.querySelector(".seconds"),
    minNum = document.querySelector(".mins"),
    hourNum = document.querySelector(".hours"),
    dayNum = document.querySelector(".day"),
    overlay = document.querySelector(".overlay"),
    dNow = new Date(),
    hours = dNow.getHours();
function setDate() {
    "use strict";
    var dNow = new Date(),
        seconds = dNow.getSeconds(),
        mins = dNow.getMinutes(),
        hours = dNow.getHours(),
        secondDegrees = ((seconds / 60) * 360) + 90,
        minDegrees = ((mins / 60) * 360) + 90,
        hourDegrees = ((hours / 12) * 360) + 90;
    if (hours >= 12) {
        hours = hours - 12;
        dayNum.innerHTML = "PM";
    } else if (hours > 0 || hours < 12) { dayNum.innerHTML = "AM"; }
    
    if (hours === 0) { hours = 12; }
    if (hours < 10) { hours = "0" + hours; }
    if (mins < 10) { mins = "0" + mins; }
    if (seconds < 10) { seconds = "0" + seconds; }
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    hourNum.innerHTML = hours + " : ";
    minNum.innerHTML = mins + " : ";
    secondNum.innerHTML = seconds;
}
setInterval(setDate, 1000);
if (hours >= 17) {
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
}
if (hours > 6 && hours < 17) {
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
}
