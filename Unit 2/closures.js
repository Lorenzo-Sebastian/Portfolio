function createPlayer(hp, name, move){
    var hp = hp;
    var name = name;
    var move = move;
    return {
        g: new enemy(),
        gold: 99,
        getName()
        {
            return(name);
        }
       
    }
}
var lonzo = createPlayer(150, "richtofen")

console.log(lonzo.function());