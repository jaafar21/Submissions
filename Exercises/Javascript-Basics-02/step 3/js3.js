var b = document.querySelector("input");
var x=document.createElement(`div`);
document.body.appendChild(x);
var x=document.querySelector("div");
b.addEventListener("keyup", popcorn);
function popcorn() {
    x.innerHTML=b.value;
}