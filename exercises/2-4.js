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