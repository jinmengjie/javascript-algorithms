/**
 * 循环链表
 */
function Node (element) {
    this.element = element;
    this.next = null;
}

class LList {
    constructor () {
        this.head = new Node("head");
        this.head.next = this.head;
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
        while (!(currNode.next === null) && !(currNode.next.element == 'head')) {
            console.log(currNode.next.element); // 排除链表头节点打印
            currNode = currNode.next;
        }
    }
    findPrevious (item) {
        let currNode = this.head;
        while (!(currNode.next == null) && !(currNode.next.element == 'head') && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }
    remove (item) {
        let prevNode = this.findPrevious(item);
        // console.log(prevNode);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }
}

// let cities = new LList();
// cities.insert('1', "head");
// cities.insert('2', '1');
// cities.insert('3', '2');
// cities.insert('4', '1');
// // cities.display();

// cities.remove('2');
// cities.display();

/***
 * n个元素组成一个循环链表，循环剔除第m个元素，求最后剩余两个元素的位置
 */

function getSafe (n, m) {
    let list = new LList(), point = 'head';

    // 将n个元素组成一个循环链表
    for (let i = 1; i <= n; i++) {
        list.insert(i, point);
        point = i;
    }
    
    let current = list.head.next, state = '0';
    // console.log(current);
    while (n > 2) {
        for (let j = 0; j < m; j++) {
            if (state === '0') {
                current = current;
                state = '1';
            } else if (current.next.element === 'head') {
                current = current.next.next;
            } else {
                current = current.next;
            }
        }
        list.remove(current.element);
        n--;
    }

    list.display();
}

getSafe(10, 3);
getSafe(17, 4);