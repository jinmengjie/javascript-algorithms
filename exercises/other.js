// 数组去重
let uniqueArray = arr => {
    let item, result = [], obj = {};
    for (let i = 0; (item = arr[i]) !== undefined; i++) {
        let key = JSON.stringify(item);
        if (!obj[key]) {
            result.push(item);
            obj[key] = true;
        }
    }
    return result;
}
// test
// uniqueArray([{a:'1'},2,3,4,{a:'1'},'2222','2222',{b:'2'},'adsad', {b:'2'}, {'a': {a:'1'}},{'a': {a:'1'}}]);

uniqueArray([{ val: 1 }, { val: 1 }, { val: 3 }]);


// 最简洁的去重写法，但是不能对数组中引用类型的数据去重
let arr = [2,"12",2,12,1,2,1,6,12,13,6];
[...new Set(arr)];
// [2, "12", 12, 1, 6, 13]