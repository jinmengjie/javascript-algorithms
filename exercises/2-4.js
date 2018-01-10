/**
 * 创建一个对象，它将字母存储在一个数组中，并且提供一个方法可以连接所有字母显示为单词
 */

function Word() {
    this.store = [];
    this.add = add;
    this.concatWords = concatWords;
}

function add(letter) {
    this.store.push(letter);
}

function concatWords() {
    return this.store.join('');
}

let word = new Word();
word.add('a');
word.add('l');
word.add('r');
word.add('e');
word.add('a');
word.add('d');
word.add('y');

let wordStr = word.concatWords();

console.log(wordStr);