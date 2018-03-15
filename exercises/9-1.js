/**
 * 修改Set类，使里面的元素按顺序存储
 */

let Set = require('./9-0');

Set.prototype.add = function (data) {
    if (this.dataStore.includes(data)) {
        return false;
    } else {
        this.dataStore.push(data);
        this.dataStore.sort((a, b) => a-b);
        return true;
    }
}

let test = new Set();
test.add(8);
test.add(18);
test.add(9);
test.add(2);
test.add(5);
test.add(3);

test.show();