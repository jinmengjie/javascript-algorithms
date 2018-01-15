/**
 * 创建一个Person类，用于保存人的姓名和性别，创建一个至少包含10个Person对象的列表，写一个函数显示列表中所有拥有相同性别的人
 */

let List = require('./3-0.js');

function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}

function checkOut(list) {
    let mArray = [], fArray = [];
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Person) {
            list.getElement()['sex'] === 'm' ? mArray.push(list.getElement()['name']) : fArray.push(list.getElement()['name']);
        }
    }
    console.log("whose sex is male: ");
    console.log(mArray);
    console.log("whose sex is female: ");
    console.log(fArray);
}

let pList = new List();
pList.append(new Person('jin', 'm'));
pList.append(new Person('jin', 'f'));
pList.append(new Person('hh', 'm'));
pList.append(new Person('ww', 'm'));
pList.append(new Person('qq', 'f'));
pList.append(new Person('za', 'm'));
pList.append(new Person('sd', 'm'));
pList.append(new Person('eee', 'f'));

checkOut(pList);

