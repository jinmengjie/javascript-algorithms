/**
 * 一个算数表达式的后缀表达形式为：op1 op2 operator
 * 使用两个栈，一个用来存储操作数，一个用来存储操作符，设计并实现一个函数将中缀表达式转换为后缀表达式，并利用栈对该表达式求值
 * 注：前缀表达式又称波兰式，后缀表达式又称逆波兰式
 */

let Stack = require('./4-0.js');

/**
 * 比较栈顶操作符和即将入栈的操作符优先级，如果栈顶操作符优先级高需要出栈，否则第二个参数操作符入栈
 * @param {String} 
 * @return {Boolean} true-出栈，false-入栈
 */
function comparePRI (a, b) {
    if (!a) {
        return false;
    }
    if ((a === '(' && b != ')') || b === '(') {
        return false;
    }
    if ((b === '*' || b === '/') && (a === '+' || a === '-') ) {
        return false;
    }
    return true;
}

function isOperator (char) {
    return ['*', '/', '+', '-', '(', ')'].indexOf(char) > -1;
}  

// 由中缀表达式转为后缀表达式

function infixToPostfix (str) {
    let operatorStack = new Stack(), postfixArr = [];
    str.split('').forEach(e => {
        if (isOperator(e)) {
            while(comparePRI(operatorStack.peek(), e)) {
                let tmp = operatorStack.pop();
                if (tmp != '(' && tmp != ')') {
                    postfixArr.push(tmp);
                }
                if (tmp === '(' && e === ')') {
                    break;
                }
            }
            if (e != ')') {
                operatorStack.push(e);
            }
        } else {
            postfixArr.push(e);
        }
    });

    while(operatorStack.length()) {
        postfixArr.push(operatorStack.pop());
    }
    return postfixArr.join('');
}

// 计算后缀表达式

function computePostfix (exp) {
    let numStack = new Stack();
    exp.split('').forEach(e => {
        if (e.trim()) {
            if (!isOperator(e)) {
                numStack.push(e);
            } else {
                let tmp = numStack.pop();
                numStack.push(eval(numStack.pop() + e + tmp));
            }
        }
    });
    return numStack.pop();
}

let test1 = '2+3-1', test2 = '(2+3)*(3+5)/(6-2)+8';

let postfix1 = infixToPostfix(test1), postfix2 = infixToPostfix(test2);

let postfixR1 = computePostfix(postfix1), postfixR2 = computePostfix(postfix2);

console.log(2+3-1);
console.log((2+3)*(3+5)/(6-2)+8);
console.log(postfix1);
console.log(postfix2);
console.log(postfixR1);
console.log(postfixR2);