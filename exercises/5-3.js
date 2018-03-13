/**
 * 优先队列
 */

let Queue = require('./5-0');

// 重新定义队列读取
Queue.prototype.dequeue = function () {
    let entry = 0;
    for (let i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code > this.dataStore[entry].code) {
            entry = i;
        }
    }
    return this.dataStore.splice(entry, 1);
};

Queue.prototype.toString = function () {
    let retStr = '';
    for (let i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
    }
    return retStr;
};

function Patient (name, code) {
    this.name = name;
    this.code = code;
}

let eq = new Queue();
eq.enqueue(new Patient('Smith', 5));
eq.enqueue(new Patient('Jones', 4));
eq.enqueue(new Patient('Fehrenbach', 6));
eq.enqueue(new Patient('Brown', 1));
eq.enqueue(new Patient('Ingram', 1));

console.log(eq.toString());

let seen = eq.dequeue();
console.log(seen);
console.log(eq.toString());
console.log('----------------------');

let seen1 = eq.dequeue();
console.log(seen1);
console.log(eq.toString());
console.log('----------------------');

let seen2 = eq.dequeue();
console.log(seen2);
console.log(eq.toString());
console.log('----------------------');

let seen3 = eq.dequeue();
console.log(seen3);
console.log(eq.toString());
console.log('----------------------');

let seen4 = eq.dequeue();
console.log(seen4);
console.log(eq.toString());
console.log('----------------------');

let seen5 = eq.dequeue();
console.log(seen5);
console.log(eq.toString());

