/**
 * 修改Queue类，形成一个Deque类，这是一个和队列类似的数据结构，允许从队列两端添加和删除元素，也叫双向队列，写一段测试程序测试该类
 */

class Deque {
    constructor () {
        this.dataStore = [];
    }
    enqueue (element, position) {
        if (position && position === 'front') {
            this.dataStore.unshift(element);
        } else {
            this.dataStore.push(element);
        }
    }
    dequeue (position) {
        return position === 'end' ? this.dataStore.pop() : this.dataStore.shift();
    }
    front () {
        return this.dataStore[0];
    }
    back () {
        return this.dataStore[this.dataStore.length - 1];
    }
    toString () {
        let retStr = '';
        for (let i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    }
    empty () {
        if (this.dataStore.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

let testQu = new Deque();
testQu.enqueue('1');
testQu.enqueue('r');
testQu.enqueue('as');
testQu.enqueue('ay');

console.log(testQu.toString());
console.log('-------------------------');
console.log(testQu.front());
console.log('-------------------------');

testQu.enqueue('a', 'front');

console.log(testQu.toString());
console.log('-------------------------');
console.log(testQu.front());

console.log('-------------------------');

testQu.dequeue();
console.log(testQu.toString());
console.log('-------------------------');
console.log(testQu.back());
console.log('-------------------------');
testQu.dequeue('end');
console.log(testQu.toString());
console.log('-------------------------');
console.log(testQu.back());

/**
 * 使用Deque判断一个单词是否为回文
 */

function isPalindromic (word = '') {
    let wordQu = new Deque(), reword = '';
    word.split('').forEach(e => {
        wordQu.enqueue(e);
    });
    while(!wordQu.empty()) {
        reword += wordQu.dequeue('end');
    }
    return word === reword;
}

console.log(isPalindromic('hello'));
console.log(isPalindromic('abcba'));