
var input = document.querySelector("input");
var div = document.querySelector("div");

input.onkeydown = () =>{
    div.innerHTML = input.value;
}