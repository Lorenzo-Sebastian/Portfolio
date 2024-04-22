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

// Adding leaves as children of the head
head.left = leaves[0];
head.right = leaves[1];

const breadth = [];
const depth = [];


function depthFirstSearch(leaf) {
    if (leaf) {
       depth.push(leaf.value); // Add the current leaf's value to the depth array
       depthFirstSearch(leaf.left); // Recurse on the left branch
       depthFirstSearch(leaf.right); // Recurse on the right branch
    }
   }

   function breadthFirstSearch(leaf) {
    const queue = [leaf];
   
    while (queue.length > 0) {
       const current = queue.shift();
       breadth.push(current.value); // Add the current leaf's value to the breadth array
   
       if (current.left) {
         queue.push(current.left);
       }
       if (current.right) {
         queue.push(current.right);
       }
    }
   }

   function displayResults() {
    document.getElementById('output').innerHTML = `
       Depth: ${depth.join(', ')}<br>
       Breadth: ${breadth.join(', ')}
    `;
   }

   depthFirstSearch(head);
breadthFirstSearch(head);
displayResults();
   