
var a = [];
document.getElementById("Arr").innerHTML = a;

function pushVis() {
    a.push("&#128525");
    document.getElementById("Arr").innerHTML = a;
}

function unshiftVis() {
    a.unshift("&#128512");
    document.getElementById("Arr").innerHTML = a;
}

function popVis() {
    a.pop("&#128525");
    document.getElementById("Arr").innerHTML = a;
}

function shiftVis() {
    a.shift("&#128512");
    document.getElementById("Arr").innerHTML = a;
}
const characters =' &#128516;  &#128151;';

