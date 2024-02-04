
var container = document.getElementById('container');

for (var i = 1; i <= 5; i ++){
  //  const container = document.querySelector('div')
    const paragraph = document.createElement('p');
    paragraph.innerText = 'this is a paragraph ' + i;
    container.appendChild(paragraph);
    document.getElementById("container").appendChild(paragraph);
}

const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['red', 'green', 'yellow'];
body.style.backgroundColor='violet';
button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
})

