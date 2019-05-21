var x= document.querySelector("#image1");

x.addEventListener("mouseover", function(){
    x.src="images/image1_2.jpg";
});
x.addEventListener("mouseout", function(){
    x.src="images/image1.jpg";
});