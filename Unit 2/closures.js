function createPlayer(hp, name, move){
    var hp = hp;
    var name = name;
    var move = move;
    return {
    
        getName()
        {
            return(name);
        }
    }
}
var lonzo = createPlayer(150, "richtofen", 9);
console.log(lonzo);