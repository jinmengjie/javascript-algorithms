/**
 * 二叉查找树
 */

class Node {
    constructor (data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.count = 1;
    }
    show () {
        console.log(this.data);
        return this.data;
    }
    getSmallest () {
        let current = this;
        while (!(current.left == null)) {
            current = current.left;
        }
        return current;
    }
}

function removeNode (node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        // 没有子节点的节点
        if (node.left == null && node.right == null) {
            return null;
        }
        // 没有左子节点的节点
        if (node.left == null) {
            return node.right;
        }
        // 没有右子节点的节点
        if (node.right == null) {
            return node.left;
        }
        // 有两个子节点的节点
        let tempNode = node.right.getSmallest();
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}

class BST {
    constructor () {
        this.root = null;
    }
    insert (data) {
        if (this.find(data)) {
            this.update(data);
            return;
        }
        let n = new Node(data, null, null);
        if (this.root === null) {
            this.root = n;
        } else {
            let current = this.root, parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }
    update (data) {
        let current = this.find(data);
        current.count++;
        return current;
    }
    getMin () {
        let current = this.root;
        while (!(current.left == null)) {
            current = current.left;
        }
        return current.data;
    }
    getMax () {
        let current = this.root;
        while (!(current.right == null)) {
            current = current.right;
        }
        return current.data;
    }
    find (data) {
        let current = this.root;
        while (!(current == null)) {
            if (data == current.data) {
                return current;
            } else if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        } 
        return null;
    }
    remove (data) {
        this.root = removeNode(this.root, data);
        console.log(this.root);
    }
    getLength () {
        let n = 0, current = this.root;
        function ergodic(node) {
            if (node != null) {
                n++;
                ergodic(node.left);
                ergodic(node.right);
            }
            return n;
        }
        return ergodic(current);
    }
    getEdgeLength () {
        return (this.getLength() - 1);
    }
}

// 中序遍历
function inOrder (node) {
    if (!(node == null)) {
        inOrder(node.left);
        node.show();
        inOrder(node.right);
    }
}

// 先序遍历
function preOrder (node) {
    if (!(node == null)) {
        node.show();
        preOrder(node.left);
        preOrder(node.right);
    }
}

// 后序遍历
function postOrder (node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        node.show();
    }
}

let nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(2);
nums.insert(13);
nums.insert(99);
nums.insert(27);
nums.insert(8);

inOrder(nums.root);

console.log('------------------');

preOrder(nums.root);

console.log('------------------');

postOrder(nums.root);

console.log('---------------------');

console.log(nums.getMin());
console.log(nums.getMax());

console.log('---------------------');
console.log(nums.find(13));
console.log(nums.find(18));

console.log('---------------------');

nums.remove(23);
inOrder(nums.root);
nums.remove(2);
inOrder(nums.root);

nums.remove(99);
inOrder(nums.root);

console.log('----------------------');
console.log(nums.getLength());
console.log(nums.getEdgeLength());
