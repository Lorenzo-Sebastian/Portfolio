//This code will append results to the page via createCharacter function in a paragraph element and will log name and hp to console

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
const myCharacter = createCharacter('BOB', 100, 'Fists', 'meme attack', 'slap to the face');
myCharacter.displayMoves();

console.log(myCharacter.getHp());
console.log(myCharacter.getName());