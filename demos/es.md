### ECMAScript2016（ES7）

#### Array.prototype.includes()

```javascript
    Array.prototype.includes（value：任意值）： boolean
```
如果传入的值在当前数组（this）中则返回 true，否则返回 false：

`includes`方法与`indexOf`方法很相似——下面两个表达式是等价的：

```javascript
    [NaN].includes(NaN); // true
    [NaN].indexOf(NaN); // -1
```

#### 异步函数

async、await

```javascript
    async function fetchJson(url) {
        try {
            let request  = await fetch(url);
            let text = await request.text();
            return JSON.parse(text);
        } catch (e) {
            console.log(`Error: ${e.stack}`)
        }
    }
```

异步函数变体：

- 函数声明：

```javascript
    async function foo() {}
```

- 函数表达式：

```javascript
    const foo = async function() {};
```

- 方法定义：

```javascript
    let obj = {
        async foo() {}
    };
```

- 箭头函数

```javascript
    const foo = async () => {};
```


