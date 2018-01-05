function weekTemp() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add(numrows, numcols, item) {
    if (!Array.isArray(this.dataStore[numrows-1])) {
        this.dataStore[numrows-1] = [];
    } 
    this.dataStore[numrows-1][numcols-1] = item;
}
function average(flag) {
    let weeksAverage = [];
    for (let i=0; i<this.dataStore.length; i++) {
        let weekItem = this.dataStore[i];
        let weekTotal = 0;
        for (let j=0; j<weekItem.length; j++) {
            weekTotal += weekItem[j] || 0;
        }
        weeksAverage.push(weekTotal/weekItem.length);
    }
    if (flag === 'w') {
        for (let index in weeksAverage) {
            console.log('week ' + (parseInt(index)+1) + ': ' + weeksAverage[index]);
        }
    } else if (flag === 'm') {
        let total = 0;
        weeksAverage.forEach(item => {
            total += item;
        });
        console.log('month average is : ' + total/weeksAverage.length);
    } else if (weeksAverage[flag-1]) {
        console.log('month ' + flag + ' average is : ' + weeksAverage[flag-1]);
    } else {
        console.log(flag + ' is not a week of this month.');
    }
}

let weekData = new weekTemp();

weekData.add(1, 1, 30);
weekData.add(1, 2, 25);
weekData.add(1, 3, 37);
weekData.add(1, 4, 25);
weekData.add(1, 5, 17);
weekData.add(2, 1, 30);
weekData.add(2, 2, 30);
weekData.add(2, 3, 30);
weekData.add(2, 4, 30);
weekData.add(2, 5, 30);
weekData.add(2, 7, 30);
weekData.add(3, 1, 18);
weekData.add(3, 2, 14);

weekData.average('w');
weekData.average('m');
weekData.average(1);
weekData.average(2);
weekData.average(3);
weekData.average(4);
