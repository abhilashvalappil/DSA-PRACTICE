

//**** level order traversal BST
class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function levelOrder(root){
    if(!root) return [];
    const result = [];
    const queue = [root];
    
    while(queue.length){
        let level = [];
        let levelsize = queue.length;
        
        for(let i=0; i<levelsize; i++){
            let node = queue.shift();
            level.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
        result.push(level)
    }
    return result;
}

const levelRoot = new TreeNode(1);
levelRoot.left = new TreeNode(2);
levelRoot.right = new TreeNode(3);
levelRoot.left.left = new TreeNode(4);
console.log(levelOrder(levelRoot));



// ********* Find secondlargest
class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new TreeNode(value);
        if(!this.root){
            this.root = newNode;
            return;
        }
        let current = this.root;
        while(true){
            if(value < current.value){
                if(!current.left){
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
    findSecLargest(){
        if(!this.root || (!this.root.left && !this.root.right)){
            return null;
        }
        let current = this.root;
        let parent = null;
        
        while(current.right){
            parent = current;
            current = current.right;  
        }
        if(current.left){
            let secLargest = current.left;
            while(secLargest.right){
                secLargest = secLargest.right;
            }
            return secLargest.value;
        }
        return parent.value;
    }
}
const bst = new BST();
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);

console.log("Second largest element:", bst.findSecLargest());



// ******* binary search tree
class Node {
    constructor(value){
        this.value = value;
        this.left = null; 
        this.right = null;
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return;
        }
        let current = this.root;
        while(true){
            if(value < current.value){
                if(!current.left){
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }else if(value > current.value){
                if(!current.right){
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }else{
                return undefined;
            }
        }
    }
    
    search(value){
        let current = this.root;
        while(current){
            if(value < current.value){
                current = current.left
            }else if(value > current.value){
                current = current.right;
            }else {
                return true;
            }
        }
        return false;
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(node,value){
        if(!node) return null;
        if(value < node.value){
            node.left = this.deleteNode(node.left,value)
        }else if(value > node.value){
            node.right = this.deleteNode(node.right,value)
        }else{
            if(!node.left && !node.right) return null;
            if(!node.left){
                return node.right;
            }
            if(!node.right){
                return node.left;
            }
            const minRight = this.findMin(node.right);
            node.value = minRight.value;
            node.right = this.deleteNode(node.right,minRight.value)
        }
        return node;
    }
    findMin(node){
        while(node.left){
            node = node.left;
        }
        return node;
    }
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log(bst.search(7));
console.log(bst.search(100));  
bst.delete(5);
console.log(bst.search(5));


// *********** find the closest value to a given number in a Tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            } else {
                return;
            }
        }
    }

    findClosest(target) {
        let node = this.root;
        let closest = node.value;

        while (node) {
            if (Math.abs(target - closest) > Math.abs(target - node.value)) {
                closest = node.value;
            }

            if (node.value < target) {
                node = node.right;
            } else if (node.value > target) {
                node = node.left;
            } else {
                return node.value;
            }
        }

        return closest;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(1);
bst.insert(13);
bst.insert(22);
bst.insert(14);

console.log(bst.findClosest(12));
console.log(bst.findClosest(6));


