var x= document.querySelector("#image1");

x.addEventListener("mouseover", function() {
  x.style.border = "3px solid red";
})
  
x.addEventListener("mouseout", function() {
  x.style.border = "0px solid red";
})