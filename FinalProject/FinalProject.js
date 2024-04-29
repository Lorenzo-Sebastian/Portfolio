// Define a Node class for the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Define a LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Function to add a new node to the list
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Function to remove a node from the list
    remove(data) {
        if (!this.head) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }

    // Function to display the list
    display() {
        let current = this.head;
        const listElement = document.getElementById('list');
        listElement.innerHTML = ''; // Clear the list
        while (current) {
            const listItem = document.createElement('li');
            listItem.textContent = current.data;
            listElement.appendChild(listItem);
            current = current.next;
        }
    }
}

// Instantiate the LinkedList
const list = new LinkedList();

// Function to add an item to the list
function addItem() {
    const inputItem = document.getElementById('inputItem');
    const item = inputItem.value;
    list.add(item);
    list.display();
    inputItem.value = ''; // Clear the input field
}

// Function to remove an item from the list
function removeItem() {
    const inputItem = document.getElementById('inputItem');
    const item = inputItem.value;
    list.remove(item);
    list.display();
    inputItem.value = ''; // Clear the input field
}

function changeBG() {
    const selectedBGColor = document.getElementById("bgColorChoice").value;
    document.body.style.backgroundColor = selectedBGColor;
}

var dom, x, y, finalx = 800, finaly = 0;

function initText() {
    dom = document.getElementById('theText').style;
    x = dom.left;
    y = dom.top;
    x = x.match(/\d+/);
    y = y.match(/\d+/);
    moveText(x, y);
}

function moveText(x, y) {
    if (x != finalx)
        if (x > finalx) x--;
        else if (x < finalx) x++;

    if (y != finaly)
        if (y > finaly) y--;
        else if (y < finaly) y++;

    if ((x != finalx) || (y != finaly)) {
        dom.left = x + "px";
        dom.top = y + "px";
        setTimeout("moveText(" + x + "," + y + ")", 1);
        initText2();
    }
}
var dom2, x2, y2, finalx2 = 100, finaly2 = 0;
function initText2() {
   
    dom2 = document.getElementById('theText').style;
    x2 = dom2.left;
    y2 = dom2.top;
    x2 = x2.match(/\d+/);
    y2 = y2.match(/\d+/);
    moveTextback(x2, y2);
}

function moveTextback(x2, y2) {
    if (x2 != finalx2)
        if (x2 > finalx2) x2--;
        else if (x2 < finalx2) x2++;

    if (y2 != finaly2)
        if (y2 > finaly2) y2--;
        else if (y2 < finaly2) y2++;

    if ((x2 != finalx2) || (y2 != finaly2)) {
        dom.left = x2 + "px"; // Corrected from dom2.style.left
        dom.top = y2 + "px"; // Corrected from dom2.style.top
        setTimeout("moveText(" + x2 + "," + y2 + ")", 1);
    }
}
