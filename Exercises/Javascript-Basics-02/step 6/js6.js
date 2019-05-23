
function mouseOver(x) {
    if (x == 1) {
      document.getElementById('image' + x).src = 'images/image2.jpg';
    } else if (x == 2) {
      document.getElementById('image' + x).src = 'images/image3.jpg';
    } else if (x == 3) {
      document.getElementById('image' + x).src = 'images/image4.jpg';
    } else if (x == 4) {
      document.getElementById('image' + x).src = 'images/image5.jpg';
    } else if (x == 5) {
      document.getElementById('image' + x).src = 'images/image1.jpg';
    }
  }
  
  function mouseOut(x) {
    if (x == 1) {
      document.getElementById('image' + x).src = 'images/image1.jpg';
    } else if (x == 2) {
      document.getElementById('image' + x).src = 'images/image2.jpg';
    } else if (x == 3) {
      document.getElementById('image' + x).src = 'images/image3.jpg';
    } else if (x == 4) {
      document.getElementById('image' + x).src = 'images/image4.jpg';
    } else if (x == 5) {
      document.getElementById('image' + x).src = 'images/image5.jpg';
    }
  }