var a = ["Boom", "Bam", "Bizzy"];
document.getElementById("myId").innerHTML = a;

function myFunction() {
    a.push("Bop");
    document.getElementById("myId").innerHTML = a;
}