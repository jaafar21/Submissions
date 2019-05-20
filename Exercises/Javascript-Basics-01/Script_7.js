var shoe_size = prompt("What's your shoe size");
var birth_year = prompt("When were you born");

function calc(){
    shoe_size *= 2;
    shoe_size += 5;
    shoe_size *= 50;
    shoe_size -= birth_year;
    alert(shoe_size);
}

calc();