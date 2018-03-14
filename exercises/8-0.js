/**
 * 散列
 */

class HashTable {
    constructor () {
        this.table = new Array(137);
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
    put (data) {
        let pos = this.betterHash(data);
        this.table[pos] = data;
    }
    showDistro () {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] != undefined) {
                console.log(i + ": " + this.table[i]);
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