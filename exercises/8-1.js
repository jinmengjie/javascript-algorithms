/**
 * 散列-线性探测法解决碰撞
 */

class HashTable {
    constructor () {
        this.table = new Array(137);
        this.values = [];
    }
    simpleHash (data) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
    betterHash (str) {
        const H = 33;
        let total = 0;
        for (let i = 0; i < str.length; i++) {
            total += H * total + str.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        console.log(str + ": " + total);
        return parseInt(total);
    }
    put (key, data) {
        let pos = this.betterHash(key);
        if (this.table[pos] == undefined) {
            this.table[pos] = key;
            this.values[pos] = data;
        } else {
            // 线性探测法：当发生碰撞时，检查散列表中下一个位置是否为空，如果为空就将数据存入，否则继续检查下一个位置
            while (this.table[pos] != undefined) {
                pos++;
            }
            this.table[pos] = key;
            this.values[pos] = data;
        }
    }
    get (key) {
        let hash = -1;
        hash = this.betterHash(key);
        if (hash > -1) {
            for (let i = hash; this.table[hash] != undefined; i++) {
                if (this.table[hash] == key) {
                    return this.values[hash];
                }
            }
        }
        return undefined;
    }
    showDistro () {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] != undefined) {
                console.log(this.table[i] + ": " + this.values[i]);
            }
        }
    }
}

let someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

let hTable = new HashTable();
for (let i = 0; i < someNames.length; i++) {
    hTable.put(someNames[i]);
}

hTable.showDistro();