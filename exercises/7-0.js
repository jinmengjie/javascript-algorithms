/**
 * 字典
 */

class Dictionary {
    constructor () {
        this.dataStore = new Array();
    }
    add (key, value) {
        this.dataStore[key] = value;
    }
    find (key) {
        return this.dataStore[key];
    }
    remove (key) {
        delete this.dataStore[key];
    }
    showAll () {
        let dataKeys = Array.prototype.slice.call(Object.keys(this.dataStore));
        dataKeys.sort(); // 有序字典
        for (let key in dataKeys) {
            console.log(dataKeys[key] + " -> " + this.dataStore[dataKeys[key]]);
        }
    }
    count () {
        return Object.keys(this.dataStore).length;
        // 不能直接使用this.dataStore.length;因为键值为字符串时长度没有计数
    }
    clear () {
        // for(let key of Object.keys(this.dataStore)) {
        //     delete this.dataStore[key];
        // }
        Object.keys(this.dataStore).forEach(key => {
            delete this.dataStore[key];
        })
    }
}

module.exports = Dictionary;

// let test = new Dictionary();
// test.add('d', 3);
// test.add(1, 'asdad');
// test.add('a', 1);
// test.add('b', 2);
// test.add('c', 3);

// test.showAll();
// console.log(test.count())

// test.clear();
// test.showAll();
// console.log(test.count());