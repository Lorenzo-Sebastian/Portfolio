var i = document.querySelector('div');

function color(z){
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByName("BODY")[0].style.backgroundColor=b;
}