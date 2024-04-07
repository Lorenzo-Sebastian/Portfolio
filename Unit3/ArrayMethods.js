//Lorenzo Sebastian 4/7/2024 Array Methods assignment 
let myArray = [];
//create an array to store data

function update() {
    const output = document.getElementById('output');
    output.innerHTML = '';
    const arrayString = myArray.reduce((acc, curr, index) => {
        return acc + `${index + 1}. ${curr}<br>`;
    }, '');
    output.innerHTML = arrayString;
}
//function will be used for all other functions to update the page when a button is pressed, messes with array values

function pushInput() {
    const inputText = document.getElementById('inputText').value;
    myArray.push(inputText);
    update();
}
//push function will take the values from the textbox and will put it on the page and array

function popArray() {
    myArray.pop();
    update();
}
//removes most recent values from array and removes it from the page

function shiftArray() {
    myArray.shift();
    update();
}
//Removes the first element from the array and updates the display

function unshiftInput() {
    const inputText = document.getElementById('inputText').value;
    myArray.unshift(inputText);
    update();
}
//Adds the current input text to the beginning of the array and updates the display

function arrMap() {
    const inputText = document.getElementById('inputText').value;
    myArray = myArray.map(item => item + inputText);
    update();
}
//Adds the current input text to each element of the array and updates the display