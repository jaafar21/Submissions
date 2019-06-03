var c= document.querySelector("button");

c.addEventListener("click", myFunction);

function myFunction() {
  var a = document.getElementById("password").value;
  var b = document.getElementById("confirmation").value;
  if (a == b) {
  }
  else {
    document.getElementById("password").style.border= "1px solid red";
    document.getElementById("confirmation").style.border= "1px solid red";
  }
  }
