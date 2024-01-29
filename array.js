const array1 = [1, 2, 3, 4];
let add = function(num1)
{
    return num1 + 1;
}
let result = add(5);
console.log(result);

function functionName (functionparameter,number)
{if ((number % 2)==0){
    functionparameter(number);
    return number;
}
else{
    console.log("the number is odd");
}

}
console.log(functionName(add,3));

let txt = "";
for (x in array1) {
    console.log(functionName(add, array1[x]));
}