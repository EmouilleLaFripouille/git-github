var fireRed = document.getElementsByClassName("off-fire-r")[0];
var fireYellow = document.getElementsByClassName("off-fire-y")[0];
var fireGreen = document.getElementsByClassName("off-fire-g")[0];
var yellowTimer = null; 

function setSignRed() {
    fireRed.className = "off-fire-r fire-red";
    fireGreen.className = "off-fire-g";
    fireYellow.className = "off-fire-y";
    yellowTimer = null;
    setTimeout(function() { setSignGreen(); }, 7000);
}

function setSignYellow() {
    fireRed.className = "off-fire-r";
    fireGreen.className = "off-fire-g";
    fireYellow.className = "off-fire-y fire-yellow";
    yellowTimer = null;
    setTimeout(function() { setSignRed(); }, 2500);
}

function setSignGreen() {
    fireRed.className = "off-fire-r";
    fireGreen.className = "off-fire-g fire-green";
    fireYellow.className = "off-fire-y";
    yellowTimer = setTimeout(function() { setSignYellow(); }, 7000);
}

function buttonClick() {
    if (yellowTimer === null) {
        return false;
    }
    clearTimeout(yellowTimer);
    yellowTimer = setTimeout(function() { setSignYellow(); }, 2000);
}

function startSign() {
    setSignRed();
}

startSign()