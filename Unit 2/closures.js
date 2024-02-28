function createPlayer(name, hp, move){
    var name = name;
    var hp = hp;
    var move = move;
    return {

        getName()
        {
            return(name);
               
        }
        ,getHp(){
            return (hp)
        }
    }
    
    
}

var para = document.querySelectorAll("div");
for (var i = 1; i <= 3; i ++){
    var newParagraph = document.createElement("p");
    var text = document.createTextNode("9");
    newParagraph.appendChild(text);
    para[0].parentElement.appendChild(newParagraph);
}

var lonzo = createPlayer("richtofen", 9, 9);
console.log(lonzo.getName());
console.log(lonzo.getHp());