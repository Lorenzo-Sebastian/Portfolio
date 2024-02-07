//Lorenzo Sebastian
//2/4/2024
var para = document.querySelectorAll("h3");
for (var i = 1; i <= 5; i ++){
    var newParagraph = document.createElement("p");
    var text = document.createTextNode("Loop and modifying elements!");
    newParagraph.appendChild(text);
    para[0].parentElement.appendChild(newParagraph);
}

function colorBlack()
{
    document.body.style.background="black";
    document.querySelectorAll('h3').forEach(e=>e.style.color="white");
    document.querySelectorAll('p').forEach(e=>e.style.color="white");
}
function colorWhite()
{
    document.body.style.background="white";
    document.querySelectorAll('h3').forEach(e=>e.style.color="black");
    document.querySelectorAll('p').forEach(e=>e.style.color="black");
}

const txt1 = document.getElementById('tbuser');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');

function fun1(){
    out1.innerHTML = txt1.value;
}
btn1.addEventListener('click',fun1);