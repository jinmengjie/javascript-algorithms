/**
 * 集合
 */

class Set {
    constructor () {
        this.dataStore = [];
    }
    add (data) {
        if (this.dataStore.includes(data)) {
            return false;
        } else {
            this.dataStore.push(data);
            return true;
        }
    }
    remove (data) {
        let pos = this.dataStore.indexOf(data);
        if (pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    }
    show () {
        console.log(this.dataStore);
    }
    contains (data) {
        if (this.dataStore.includes(data)) {
            return true;
        } else {
            return false;
        }
    }
    union (set) {
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; i++) {
            tempSet.add(this.dataStore[i]);
        }
        for (let i = 0; i < set.dataStore.length; i++) {
            if (!tempSet.contains(set.dataStore[i])) {
                tempSet.dataStore.push(set.dataStore[i]);
            }
        }
        return tempSet;
    }
    intersect (set) {
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; i++) {
            if (set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }
    subset (set) {
        if (this.dataStore.length > set.dataStore.length) {
            console.log(this.dataStore + '不属于' + set.dataStore + '的子集1');
            return false;
        }
        for (let i = 0; i < this.dataStore.length; i++) {
            if (!set.contains(this.dataStore[i])) {
                console.log(this.dataStore + '不属于' + set.dataStore + '的子集2');
                return false;
            }
        }
        console.log(this.dataStore + '属于' + set.dataStore + '的子集');
        return true;
    }
    difference (set) {
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; i++) {
            if (!set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }
}

module.exports = Set;

// let names = new Set();
// names.add('jin');
// names.add('hh');
// names.add('jin1');
// names.add('jin2');
// names.show();

// console.log('--------------');

// let test = new Set();
// test.add('1');
// test.add('2');
// test.add('jin');

// test.show();
// console.log('------------');

// let hhw = test.union(names);
// hhw.show();

// console.log('--------------');
// let hhhe = test.intersect(names);
// hhhe.show();

// console.log('----------------');
// hhw.subset(names);
// hhhe.subset(names);
// test.subset(names);

// console.log('----------------');
// let dif = test.difference(names);
// dif.show();