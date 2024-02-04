var i = document.querySelector('div');

let message = document.querySelector('p');

const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['red', 'green', 'yellow'];
button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    bodystyle.backgroundColor=colors[colorsIndex];
})

function color(z){
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByName("BODY")[0].style.backgroundColor=b;
}