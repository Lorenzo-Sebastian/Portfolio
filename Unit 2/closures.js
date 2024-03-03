// function createPlayer(name, hp, move){
//     var name = name;
//     var hp = hp;
//     var move = move;
//     return {

//         getName()
//         {
//             return(name);
               
//         }
//         ,getHp(){
//             return (hp)
//         }
//     }
    
    
// }

// var para = document.querySelectorAll("div");
// for (var i = 1; i <= 3; i ++){
//     var newParagraph = document.createElement("p");
//     var text = document.createTextNode("9");
//     newParagraph.appendChild(text);
//     para[0].parentElement.appendChild(newParagraph);
// }

// var lonzo = createPlayer("richtofen", 9, 9);
// console.log(lonzo.getName());
// console.log(lonzo.getHp());

function createCharacter(name, HP, ...moves) {
    let hp = HP;
    let nameVar = name;
    let movesList = moves;

    return {
        getHp: function() {
            return hp;
        },
        getName: function() {
            return nameVar;
        },
        displayMoves: function() {
            const movesDiv = document.querySelector('.moves');
            for (let move of movesList) {
                const p = document.createElement('p');
                p.textContent = move;
                movesDiv.appendChild(p);
            }
        }
    };
}
const myCharacter = createCharacter('Ash', 100, 'Ember', 'Leaf Storm', 'Flamethrower');
myCharacter.displayMoves();

console.log(myCharacter.getHp());
console.log(myCharacter.getName());