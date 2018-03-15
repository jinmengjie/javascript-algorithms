/**
 * 修改Set类将存储方式由数组改为链表
 */

let {Node, LList} = require('./6-0');

LList.prototype.findLast = function () {
    let currNode = this.head;
    while (!(currNode.next === null)) {
        currNode = currNode.next;
    }
    return currNode;
}

LList.prototype.length = function () {
    let currNode = this.head, n = 0;
    while (!(currNode.next === null)) {
        n++;
        currNode = currNode.next;
    }
    return n;
}

class Set {
    constructor () {
        this.dataStore = new LList();
    }
    add (data) {
        if (this.dataStore.find(data)) {
            return false;
        } else {
            let lastTmp = this.dataStore.findLast();
            this.dataStore.insert(data, lastTmp.element);
            return true;
        }
    }
    remove (data) {
        let currNode = this.dataStore.find(data);
        if (currNode) {
            this.dataStore.remove(data);
            return true;
        } else {
            return false;
        }
    }
    show () {
        this.dataStore.display();
    }
    contains (data) {
        if (this.dataStore.find(data)) {
            return true;
        } else {
            return false;
        }
    }
    union (set) {
        let tempSet = new Set();
        let currNode = this.dataStore.head;
        while (!(currNode === null)) {
            tempSet.add(currNode.element);
            currNode = currNode.next;
        }
        let cNode = set.dataStore.head;
        while (!(cNode === null)) {
            if (!tempSet.dataStore.find(cNode)) {
                tempSet.add(cNode.element);
            }
            cNode = cNode.next;
        }
        return tempSet;
    }
    intersect (set) {
        let tempSet = new Set();
        let currNode = this.dataStore.head;
        while (!(currNode === null)) {
            if (set.contains(currNode.element)) {
                tempSet.add(currNode.element);
            }
            currNode = currNode.next;
        }
        return tempSet;
    }
    subset (set) {
        if (this.dataStore.length() > set.dataStore.length()) {
            this.dataStore.display();
            console.log('不属于');
            set.dataStore.display();
            console.log('的子集1');
            return false;
        }
        let currNode = this.dataStore.head;
        while (!(currNode === null)) {
            if (!set.contains(currNode.element)) {
                this.dataStore.display();
                console.log('不属于');
                set.dataStore.display();
                console.log('的子集2');
                return false;
            }
            currNode = currNode.next;
        }
        this.dataStore.display();
        console.log('属于');
        set.dataStore.display();
        console.log('的子集');
        return true;
    }
    difference (set) {
        let tempSet = new Set();
        let currNode = this.dataStore.head;
        while (!(currNode === null)) {
            if (!set.contains(currNode.element)) {
                tempSet.add(currNode.element);
            }
            currNode = currNode.next;
        }
        return tempSet;
    }
}

let names = new Set();
names.add('jin');
names.add('hh');
names.add('jin1');
names.add('jin2');
names.show();

console.log('--------------');

let test = new Set();
test.add('1');
test.add('2');
test.add('jin');
test.add('jin3');

test.show();
console.log('------------');

let hhw = test.union(names);
hhw.show();

console.log('--------------');
let hhhe = test.intersect(names);
hhhe.show();

console.log('----------------');
hhw.subset(names);
hhhe.subset(names);
test.subset(names);

console.log('----------------');
let dif = test.difference(names);
dif.show();