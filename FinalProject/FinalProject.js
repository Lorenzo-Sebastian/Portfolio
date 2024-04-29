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