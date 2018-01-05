function Store() {
    this.list = [];
    this.add = add;
    this.show = show;
}

function add(words) {
    this.list.push(words);
}

function show(sort) {
    let concat = function(sum, item) {
        return sum + item;
    };
    let result = '';
    if (sort === 'DESC') {
        result = this.list.reduceRight(concat);
    } else if (sort === 'ASC') {
        result = this.list.reduce(concat);
    } else {
        result = 'Plz put in sort key';
    }
    console.log(result);
}

let StoreWords = new Store();
StoreWords.add('today ');
StoreWords.add('is ');
StoreWords.add('a ');
StoreWords.add('good ');
StoreWords.add('day ');

StoreWords.show('ASC');
StoreWords.show('DESC');