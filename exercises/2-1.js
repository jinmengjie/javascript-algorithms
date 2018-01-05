function Student() {
    this.scores = [];
    this.add = add;
    this.average = average;
}

function add(tem) {
    this.scores.push(tem);
}

function average() {
    let total = 0;
    this.scores.forEach(element => {
        total += element;
    });
    return total/this.scores.length;
}

let StudentData = new Student();
StudentData.add(90);
StudentData.add(50);
StudentData.add(80);
StudentData.add(20);

console.log(StudentData.average());