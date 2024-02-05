//Lorenzo Sebastian
//2/4/2024
var para = document.querySelectorAll("h3");
for (var i = 1; i <= 5; i ++){
    var newParagraph = document.createElement("p");
    var text = document.createTextNode("middle paragraph");
    newParagraph.appendChild(text);
    para[0].parentElement.appendChild(newParagraph);
}

function colorBlack()
{
    document.body.style.background="black";
    document.querySelectorAll('h3').forEach(e=>e.style.color="white");
    document.querySelectorAll('p').forEach(e=>e.style.color="white");
}

