/**
 * 使用Dictionary类来统一段文本中单词出现的次数
 */

let Dictionary = require('./7-0');

function countWords (text) {
    let d = new Dictionary(), regx = /[a-z]+[\-\']?[a-z]*/ig;
    let wordsArr = text.match(regx);
    wordsArr.forEach(element => {
        console.log(d.find(element));
        d.add(element, ((d.find(element) || 0) + 1));
    });
    d.showAll();
}

let str = "hello, jon, i'm a student. not student, jin jin jin";

countWords(str);