function changeImage(x){
    img = document.querySelector("img:nth-child(" + x + ")");
    img.src = "images/image"+ x + "_2.jpg";   
}

function resetImage(x){
    img = document.querySelector("img:nth-child(" + x + ")");
    img.src = "images/image"+ x + ".jpg";  
}