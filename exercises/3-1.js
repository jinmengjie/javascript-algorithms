/**
 * 增加一个向列表中插入元素的方法appendBig，该方法只在待插元素大于列表中的多有元素时才执行插入操作，这里的大于有多重含义，对于数字，指数值上的大小，对于字母指先后顺序
 */

let List = require('./3-0.js');

let demoList = new List();
demoList.append(1);
demoList.append(2);
demoList.append(3);
demoList.append(10);

console.log(demoList.toString());

demoList.appendBig(11);
console.log(demoList.toString());

let demo2 = new List();
demo2.append('a');
demo2.append('s');

console.log(demo2.toString());

demo2.appendBig('d');
console.log(demo2.toString());

demo2.appendBig('z');
console.log(demo2.toString());