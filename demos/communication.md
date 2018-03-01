### 通信类

#### 什么是同源策略及限制

#### 前后端如何通信
    ajax\WebSocket（不受同源策略限制）\CORS
#### 如何创建ajax

    考察点：
    1、XMLHttpRequest对象的工作流程
    2、兼容性处理（XMLHttpRequest高级浏览器支持，IE不支持）
    3、事件的触发条件
    4、事件的触发顺序

#### 跨域通信的几种方式

    JSONP
        原理及实现：script加载，服务器端通过创建script执行传过去的callback值为名称的方法，需要在全局注册一个callback名称对应的方法
    Hash（hash改变页面不刷新，search改变页面会刷新）
        iframe或frame
        window.onhaschange
    postMessage（H5）
        A窗口：http://a.com
        window.postMessage('message', 'http://b.com');
        B窗口监听：
        window.addEventListener('message', function(e){
            console.log(e.origin); // http://a.com
            console.log(e.source);  // A窗口window的引用
            console.log(e.data); // 发送的data数据
        });
    WebSocket
        var ws = new WebSocket('wss://echo.websocket.org');
        ws.onopen = function(evt) {
            console.log('Connection open...');
            ws.send('Hello WebSockets!');
        };
        ws.onmessage = function(evt) {
            console.log('Received Message: ' + evt.data);
            ws.close();
        };
        ws.onclose = function(evt) {
            console.log('Connection closed.');
        }

    CORS（请求头加origin）
        fetch API
        服务端设置 Access-Control-Allow-Origin
        如果需要允许跨域带cookie：服务端设置Access-Control-Allow-Credentials，客户端设置xhr.withCredentials

    详细全面的解决方案可参考[https://segmentfault.com/a/1190000011145364](https://segmentfault.com/a/1190000011145364)

