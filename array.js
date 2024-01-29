const array1 = [1, 2, 3, 4];
let add = function(num1,num2)
{
    return num1 + num2;
}
let result = add(5,6);
console.log(result);

function functionName (functionparameter,number)
{if ((number % 2)==0){
    add(number);
    return number;
}
else{
    console.log("the number is odd");
}

}
let results = functionName (add, 3);
console.log(results);

let txt = "";
for (x in array1) {
    txt += array1[x];
    functionName (add, 3);
}
