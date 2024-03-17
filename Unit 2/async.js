async function run(){
    var runner1 = false;
    var runner2 = false;
    var loser = "";

    var runner1Now = new Promise(function(resolve){
        setTimeout(()=>{
            loser = "runner1";
            resolve("runner1");

        }, 9000);
        
    });
    var runner2Now = new Promise(function(resolve){
        setTimeout(()=>{
            loser = "runner2";
            resolve("runner2");
        }, 8000);
    });
    return [await runner1Now, await runner2Now, loser];
};
run().then((i)=>{
    console.log(i)
});