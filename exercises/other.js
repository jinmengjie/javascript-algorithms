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

// 利用reduce实现数组去重

let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
let result = arr.sort().reduce((init, current)=>{
    if(init.length===0 || init[init.length-1]!==current){
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]

// 实现destructuringArray方法，达到如下效果
// destructuringArray( [1,[2,4],3], "[a,[b],c]" );
// result
// { a:1, b:2, c:3 }

const targetArray = [1, [2, 3], 4];
const formater = "[a, [b], c]";
const formaterArray = ['a', ['b'], 'c'];

const destructuringArray = (values, keys) => {
  try {
    const obj = {};
    if (typeof keys === 'string') {
      keys = JSON.parse(keys.replace(/\w+/g, '"$&"'));
    }
    
    const iterate = (values, keys) =>
      keys.forEach((key, i) => {
        if(Array.isArray(key)) iterate(values[i], key)
        else obj[key] = values[i]
      })
      
    iterate(values, keys)
    
    return obj;
  } catch (e) {
    console.error(e.message);
  }
}

console.dir(destructuringArray(targetArray,formater));
console.dir(destructuringArray(targetArray,formaterArray));