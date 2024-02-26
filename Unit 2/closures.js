function createPlayer(hp, name, ...rest){
    var hp = hp;
    var name = name;
    var rest = rest;
    return function () {
        return hp;
        return name;
        return rest;
    }
}

var results = createPlayer(150, "Edward Richtofen", 300,200,100 )
console.log(results());