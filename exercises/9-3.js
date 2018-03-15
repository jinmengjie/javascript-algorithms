/**
 * 为Set类实现一个higher(element)方法，返回比传入元素大的最小值，实现一个lower(element)方法，返回比传入元素小的最大值
 */

let Set = require('./9-0');

Set.prototype.higher = function (element) {
    let tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
        tempSet.add(this.dataStore[i]);
    }
    tempSet.add(element);
    tempSet.dataStore.sort((a, b) => a-b);
    let index = tempSet.dataStore.indexOf(element);
    if (index === tempSet.dataStore.length-1) {
        return null;
    }
    let Hmin = tempSet.dataStore.splice(index+1, 1);
    return Hmin;
}

Set.prototype.lower = function (element) {
    let tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
        tempSet.add(this.dataStore[i]);
    }
    tempSet.add(element);
    tempSet.dataStore.sort((a, b) => a-b);
    let index = tempSet.dataStore.indexOf(element);
    if (index === 0) {
        return null;
    }
    let Lmax = tempSet.dataStore.splice(index-1, 1);
    return Lmax;
}

let test = new Set();
test.add(1);
test.add(4);
test.add(5);
test.add(2);

console.log(test.higher(3));
console.log(test.higher(5));
console.log(test.higher(6));
console.log(test.higher(1));
console.log('-------------------');
console.log(test.lower(3));
console.log(test.lower(5));
console.log(test.lower(6));
console.log(test.lower(1));

