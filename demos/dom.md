### DOM事件

#### DOM事件的级别

DOM0：onclick定义事件
DOM2：增加了addEventListener、attachEvent方法
DOM3：增加了很多事件类型，如鼠标事件、键盘事件等

**DOM1规范也有，只是没有事件相关的规范**

#### DOM事件模型

捕获、冒泡

#### DOM事件流

完整的事件流：捕获-》目标阶段-》冒泡

#### 描述DOM事件捕获的具体流程

window-》document-》html（document.documentElement）-》body-》...-》目标元素

#### Event事件的常见应用

```
    event.preventDefault(); // 阻止默认事件
    event.stopPropagation(); // 阻止冒泡
    event.stopImmediatePropagation(); // 事件响应优先级，注册两个事件，可以用来阻止另一个事件执行

    // 事件委托
    event.currentTarget; // 当前绑定事件的元素
    event.target; // 当前点击的元素
```
#### 自定义事件

```
    var eve = new Event('custom');
    ev.addEventListener('custom', function(){
        console.log('custom');
    });

    ev.dispatchEvent(eve); // 触发eve事件
```

Event和CustomEvent都是用来做自定义是事件的，Event只能定义事件名，不能指定参数，CustomEvent还可以加第二个参数options做指定参数。




