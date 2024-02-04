

for (var i = 1; i <= 5; i ++){
const para = document.createElement("p");
para.innerHTML = "this is a paragraph";
document.getElementById("myDIV").appendChild(para);
}

const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['red', 'green', 'yellow'];
//body.style.backgroundColor='violet';
//button.addEventListener('click',function(){
  //  const colorIndex=parseInt(Math.random()*colors.length);
    //body.style.backgroundColor=colors[colorIndex];
//})

