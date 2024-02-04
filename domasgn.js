var i = document.querySelector('div');
let btnSend = document.querySelector('button');
let message = document.querySelector('p');

btnSend.addEventListener('click,'() ==
{
message.innerText= 'here is some new text';
})

function color(z){
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByName("BODY")[0].style.backgroundColor=b;
}