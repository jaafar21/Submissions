var y1 =document.querySelector('#image1');
var y2 =document.querySelector('#image2');
var y3 =document.querySelector('#image3');
var y4 =document.querySelector('#image4');
var y5 =document.querySelector('#image5');

y1.addEventListener("mouseover",x);
y2.addEventListener("mouseover",x);
y3.addEventListener("mouseover",x);
y4.addEventListener("mouseover",x);
y5.addEventListener("mouseover",x);


function x (s5){
    if (s5.target.id == "image1")
    {    s5.target.src = "images/image1_2.jpg" 
var y1 =document.querySelector("image1")
}
else if(s5.target.id == "image2"){
s5.target.src = "images/image2_2.jpg"

}
else if (s5.target.id == "image3"){
    s5.target.src ="images/image3_2.jpg"
}
else if (s5.target.id == "image4"){
s5.target.src = "images/image4_2.jpg"
}
else if (s5.target.id== "image5")
{
    s5.target.src = "images/image5_2.jpg"
}
}



y1.addEventListener("mouseout",x1);
y2.addEventListener("mouseout",x1);
y3.addEventListener("mouseout",x1);
y4.addEventListener("mouseout",x1);
y5.addEventListener("mouseout",x1);


function x1 (s5){
    if (s5.target.id == "image1")
    {    s5.target.src = "images/image1.jpg" 
var y1 =document.querySelector("image1")
}
else if(s5.target.id == "image2"){
s5.target.src = "images/image2.jpg"

}
else if (s5.target.id == "image3"){
    s5.target.src ="images/image3.jpg"
}
else if (s5.target.id == "image4"){
s5.target.src = "images/image4.jpg"
}
else if (s5.target.id== "image5")
{
    s5.target.src = "images/image5.jpg"
}
}
