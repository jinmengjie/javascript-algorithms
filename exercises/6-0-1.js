/**
 * 双向链表
 */

function Node (element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

class LList {
    constructor () {
        this.head = new Node("head");
    }
    find (item) {
        let currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    insert (newElement, item) {
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        if (!(current.next === null)) {
            current.next.previous = newNode;
        }
        current.next = newNode;
    }
    display () {
        let currNode = this.head;
        while (!(currNode.next === null)) {
            console.log(currNode.next.element); // 排除链表头节点打印
            currNode = currNode.next;
        }
    }
    remove (item) {
        let currNode = this.find(item);
        if (!(currNode.next == null)) {
            currNode.next.previous = currNode.previous;
        }
        currNode.previous.next = currNode.next;
        currNode.next = null;
        currNode.previous = null;
    }
    findLast () {
        let currNode = this.head;
        while (!(currNode.next == null)) {
            currNode = currNode.next;
        }
        return currNode;
    }
    dispReverse () {
        let currNode = this.head;
        currNode = this.findLast();
        while (!(currNode.previous == null)) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    }
    // 6-1 实现advance(n),使当前节点向前移动n个节点
    advance (item, n) {
        let currNode = this.find(item);
        for (let i = 0; i < n; i++) {
            // console.log(currNode);
            if (currNode.previous != null && currNode.previous.previous != null) {
                currNode.previous.next = currNode.next;
                if (currNode.next != null) {
                    currNode.next.previous = currNode.previous;
                }
                currNode.next = currNode.previous;
                currNode.previous.previous.next = currNode;
                currNode.previous = currNode.previous.previous;
                currNode.next.previous = currNode;
            } else {
                break;
            }
        }
    }
    // 6-2 实现back(n)，是节点向后移动n个节点
    back (item, n) {
        let currNode = this.find(item);
        for (let i = 0; i < n; i++) {
            // console.log(currNode);
            if (currNode.next != null) {
                currNode.previous.next = currNode.next;
                currNode.next.previous = currNode.previous;
                currNode.next = currNode.next.next;
                currNode.previous = currNode.previous.next;
                currNode.previous.next = currNode;
                if (currNode.next != null) {
                    currNode.next.previous = currNode;
                }
            }
        }
    }
    // 实现show(), 显示当前节点上的数据
    show (item) {
        let currNode = this.find(item);
        for (let key in currNode) {
            console.log(key + ': ' + (currNode[key] && currNode[key].element ? currNode[key].element : currNode[key]));
        }
    }
}

let cities = new LList();
cities.insert('1', "head");
cities.insert('2', '1');
cities.insert('3', '2');
cities.insert('4', '1');
cities.display();

console.log('-------------');
cities.advance('3', 2);
cities.display();

console.log('-------------');
cities.advance('4', 2);
cities.display();

console.log('-------------');
cities.back('4', 2);
cities.display();

console.log('-------------');
cities.back('1', 3);
cities.display();
console.log('-------------');
cities.back('1', 1);
cities.display();

console.log('-------------');
cities.advance('4', 1);
cities.display();

console.log('-------------');
cities.show('3');
