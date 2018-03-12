/**
 * 栈可以用来哦按段一个算数表达式中的括号是否匹配，编写一个函数，接收一个算数表达式作为参数，返回括号缺失的位置，例：
 * @param {String} '2.3 + 23 / 12 + (3.14159 * 0.24'
 */

let Stack = require('./4-0.js');

// 实现

function checkBracket (str) {
    var stack = new Stack();
    var eArr = str.split('');
    for (let i = 0, len = str.length; i < len; i++) {
        let e = eArr[i];
        if (e === '(') {
            stack.push(e);
        } else if (e === ')') {
            if (stack.length() > 0) {
                stack.pop();
            } else {
                return 0;
            }
        }   
    }
    if (stack.length() > 0) {
        return str.length-1;
    }
    return false;
}

let strEg1 = '2.3 + 23 / 12 + (3.14159 * 0.24';
let strEg2 = '2.3 + 23 / 12 + 3.14159 * 0.24)'
let strEg3 = '2.3 + 23 / 12 + (3.14159 * 0.24)'

console.log(checkBracket(strEg1));
console.log(checkBracket(strEg2));
console.log(checkBracket(strEg3));