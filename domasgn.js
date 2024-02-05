

for (var i = 1; i <= 5; i ++){
    const newParagraph = document.createElement("p");
    const text = document.createTextNode("middle paragraph");
    newParagraph.appendChild(text);
    document.getElementById("myDIV").appendChild(newParagraph);
}

const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['red', 'green', 'yellow'];
//body.style.backgroundColor='violet';
//button.addEventListener('click',function(){
  //  const colorIndex=parseInt(Math.random()*colors.length);
    //body.style.backgroundColor=colors[colorIndex];
//})

