var i = document.querySelector('div');

let message = document.querySelector('p');

const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['red', 'green', 'yellow'];
body.style.backgroundColor='violet';
button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
})

function color(z){
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByName("BODY")[0].style.backgroundColor=b;
}