var container = $("#divId")



for (var i = 1; i <= 5; i ++){
    var paragraph = document.createElement('p');
    paragraph.textContent = 'this is a paragraph ' + i;
    container.append(paragraph);
}

const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['red', 'green', 'yellow'];
body.style.backgroundColor='violet';
button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
})

