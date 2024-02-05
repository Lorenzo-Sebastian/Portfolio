

for (var i = 1; i <= 5; i ++){
    const newParagraph = document.createElement("p");
    const text = document.createTextNode("middle paragraph");
    newParagraph.appendChild(text);
    document.getElementById("myDIV").appendChild(newParagraph);
}

function colorBlack()
{
    document.body.style.background="black";
    document.querySelectorAll('h3').forEach(e=>e.style.color="white");
}

