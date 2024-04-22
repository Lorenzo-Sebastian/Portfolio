class Leaf {
    constructor(value) {
       this.value = value;
       this.left = null;
       this.right = null;
    }
   }

   const head = new Leaf('Head');

   const leaves = [];
for (let i = 1; i <= 10; i++) {
 leaves.push(new Leaf(`Leaf ${i}`));
}

head.left = leaves[0];
head.right = leaves[1];

const breadth = [];
const depth = [];

function depthFirstSearch(node) {
    if (node === null) return;
    depth.push(node.value); // Add the current node's value to the depth array
    depthFirstSearch(node.left); // Recurse on the left child
    depthFirstSearch(node.right); // Recurse on the right child
   }

   function breadthFirstSearch(node) {
    const queue = [node];
   
    while (queue.length > 0) {
       const currentNode = queue.shift();
       breadth.push(currentNode.value); // Add the current node's value to the breadth array
   
       if (currentNode.left) queue.push(currentNode.left); // Enqueue left child
       if (currentNode.right) queue.push(currentNode.right); // Enqueue right child
    }
   }

   // Perform the searches
depthFirstSearch(head);
breadthFirstSearch(head);

// Display the results
const breadthList = document.getElementById('breadthList');
const depthList = document.getElementById('depthList');

breadth.forEach(value => {
 const li = document.createElement('li');
 li.textContent = value;
 breadthList.appendChild(li);
});

depth.forEach(value => {
 const li = document.createElement('li');
 li.textContent = value;
 depthList.appendChild(li);
});
   