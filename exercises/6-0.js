/**
 * 链表
 */
function Node (element) {
    this.element = element;
    this.next = null;
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
        current.next = newNode;
    }
    display () {
        let currNode = this.head;
        while (!(currNode.next === null)) {
            console.log(currNode.next.element); // 排除链表头节点打印
            currNode = currNode.next;
        }
    }
    findPrevious (item) {
        let currNode = this.head;
        while (!(currNode.next == null) && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }
    remove (item) {
        let prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }
}

let cities = new LList();
cities.insert('1', "head");
cities.insert('2', '1');
cities.insert('3', '2');
cities.display();

console.log('------------------');
cities.insert('4', '1');
cities.display();

console.log('------------------');
cities.remove('2');
cities.display();

