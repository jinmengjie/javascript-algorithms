/**
 * 列表构造函数
 */

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.hasNext = hasNext;
    this.hasPrev = hasPrev;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
    this.appendBig = appendBig;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (let i=0; i<this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    let index = this.find(element);
    if (index > -1) {
        this.dataStore.splice(index, 1);
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = 0;
    this.pos = 0;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    let index = this.find(after);
    if (index > -1) {
        this.dataStore.splice(index+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    --this.pos;
}

function next() {
    if (this.pos < this.listSize) {
        ++this.pos;
    }
}

function hasNext() {
    return this.pos < this.listSize;
}

function hasPrev() {
    return this.pos > 0;
}

function length() {
    return this.listSize;
}

function currPos() {
    return this.pos;
}

function moveTo(element) {
    let index = this.find(element);
    if (index > -1) {
        this.pos = index;
    }
}

function getElement() {
    return this.dataStore[this.pos];
}

function contains(element) {
    for (let i=0; i<this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return true;
        }
    }
    return false;
}

function appendBig(element) {
    let canAppend = true;
    for (let i=0; i<this.dataStore.length; i++) {
        if (element <= this.dataStore[i]) {
            canAppend = false;
        }
    }
    if (canAppend) {
        this.dataStore[this.listSize++] = element;
    }
}

/**
 * 插入的元素需小于所有元素才能插入
 * @param {*} element 
 */
function appendSmall(element) {
    let canAppend = true;
    for (let i=0; i<this.dataStore.length; i++) {
        if (element >= this.dataStore[i]) {
            canAppend = false;
        }
    }
    if (canAppend) {
        this.dataStore[this.listSize++] = element;
    }
}

module.exports = List;