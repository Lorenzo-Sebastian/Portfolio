let myArray = [];

function update() {
    const output = document.getElementById('output');
    output.innerHTML = '';
    myArray.reduce((acc, curr, index) => {
        acc += `${index + 1}. ${curr}<br>`;
        return acc;
    }, '');
    output.innerHTML = output.innerHTML;
}

function pushInput() {
    const inputText = document.getElementById('inputText').value;
    myArray.push(inputText);
    update();
}

function popArray() {
    myArray.pop();
    update();
}

function shiftArray() {
    myArray.shift();
    update();
}

function unshiftInput() {
    const inputText = document.getElementById('inputText').value;
    myArray.unshift(inputText);
    update();
}

function arrMap() {
    const inputText = document.getElementById('inputText').value;
    myArray = myArray.map(item => item + inputText);
    update();
}