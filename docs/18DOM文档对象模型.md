### DOM文档对象模型

文档对象模型（Document Object Model，简称 `DOM`），是 W3C 组织推荐的处理可扩展标记语言（HTML或者XML）的标准`编程接口`

W3C 已经定义了一系列的 DOM 接口，通过这些 DOM 接口可以改变网页的内容、结构和样式。

![image-20220320164644567](18DOM文档对象模型.assets/image-20220320164644567.png)



- 文档：一个页面就是一个文档，DOM中使用doucument来表示
- 元素：页面中的所有标签都是元素，DOM中使用 element 表示
- 节点：网页中的所有内容都是节点（标签，属性，文本，注释等），DOM中使用node表示

### 获取元素

#### 获取页面元素

获取页面中的元素可以使用以下几种方式:

- 根据 ID 获取
- 根据标签名获取
- 通过 HTML5 新增的方法获取
- 特殊元素获取

#### 根据ID获取

使用 `getElementByld()` 方法可以获取带ID的元素对象

```
doucument.getElementByld('id名')
```

使用 `console.dir()` 可以打印我们获取的元素对象，更好的查看对象里面的属性和方法。

###### 例子：

```
    <div id="time">2022-3-20</div>
    <script>
        // 1.因为我们文档页面从上往下加载，所以得先有标签，所以script写在标签下面
        // 2.get 获得 element 元素 by 通过 驼峰命名法
        // 3.参数 id是大小写敏感的字符串
        // 4.返回的是一个元素对象
        var timer = document.getElementById('time');
        console.log(timer);
        // 5. console.dir 打印我们的元素对象，更好的查看里面的属性和方法
        console.dir(timer);
    </script>
```



#### 根据标签名获取

根据**标签名**获取，使用 `getElementByTagName()` 方法可以返回带有指定标签名的**对象的集合**

```
doucument.getElementsByTagName('标签名');
```

- 因为得到的是一个对象的集合，所以我们想要操作里面的元素就需要遍历
- 得到元素对象是动态的
- 返回的是获取过来元素对象的集合，以伪数组的形式存储
- 如果获取不到元素，则返回为空的伪数组(因为获取不到对象)

```
<ul>
    <li>知否知否，应是等你好久</li>
    <li>知否知否，应是等你好久</li>
    <li>知否知否，应是等你好久</li>
    <li>知否知否，应是等你好久</li>
    <li>知否知否，应是等你好久</li>
</ul>
<script>
    // 1.返回的是获取过来元素对象的集合 以伪数组的形式存储
    var lis = document.getElementsByTagName('li');
    console.log(lis);
    console.log(lis[0]);
    // 2.依次打印,遍历
    for (var i = 0; i < lis.length; i++) {
        console.log(lis[i]);
    }
</script>
```



#### HTML5新增的方法获取

##### getElementsByClassName	，根据类名返回元素对象合集

根据类名返回元素对象合集

```
document.getElementsByClassName('类名')
```

###### 例子：

```
    <div class="box">盒子1</div>
    <div class="box">盒子2</div>
    <div id="nav">
        <ul>
            <li>首页</li>
            <li>产品</li>
        </ul>
    </div>

    <script>
        // etElementsByClassName	，根据类名返回元素对象合集
        var boxs = document.getElementsByClassName('box');
        console.log(boxs);
    </script>
```



##### document.querySelector	，根据指定选择器返回第一个元素对象

根据指定选择器返回`第一个元素`对象

```
document.querySelector('选择器');
```

###### 例子：

```
// 切记里面的选择器需要加符号 
// 类选择器.box 
// id选择器 #nav

    <div class="box">盒子1</div>
    <div class="box">盒子2</div>
    <div id="nav">
        <ul>
            <li>首页</li>
            <li>产品</li>
        </ul>
    </div>

    <script>
        // document.querySelector	，根据指定选择器返回第一个元素对象
        var a = document.querySelector('.box');
        var b = document.querySelector('#nav')
        var c = document.querySelector('li');
        console.log(a);
        console.log(b);
        console.log(c);
    </script>
```

##### document.querySelectorAll    ，根据指定选择器返回所有元素对象

根据指定选择器返回所有元素对象

```
document.querySelectorAll('选择器');
```

###### 例子：

```
    <div class="box">盒子1</div>
    <div class="box">盒子2</div>
    <div id="nav">
        <ul>
            <li>首页</li>
            <li>产品</li>
        </ul>
    </div>

    <script>
        // document.querySelectorAll    ，根据指定选择器返回所有元素对象
        var a = document.querySelectorAll('.box');
        console.log(a);
        var b = document.querySelectorAll('#nav');
        console.log(b);
        var c = document.querySelectorAll('li');
        console.log(c);
    </script>
```

<font color=red>注意：querySelector和querySelectorAll里面的选择器需要加符号,比如:document.querySelector('#nav');</font>



### 获取特殊元素

#### 获取body元素，返回body元素对象

```
document.body;
```

```
    <script>
        // 获取body 元素
        var bodyEle = document.body;
        console.log(bodyEle);
    </script>
```

#### 获取html元素，返回html元素对象

```
document.documentElement;
```

```
    <script>
        // 获取HTML元素
        var HtmlEle = document.documentElement;
        console.log(HtmlEle);
    </script>
```



### 事件基础

概念：JavaScript 使我们有能力创建动态页面，而事件是可以被 JavaScript 侦测到的行为。

网页中的每个元素都可以产生某些可以触发 JavaScript 的事件，例如，我们可以在用户点击某按钮时产生一个事件，然后去执行某些操作。

#### 事件三要素

1. 事件源(谁)
2. 事件类型(什么事件)
3. 事件处理程序(做啥)

```
    <button id="btn">点击按钮</button>
    <script>
        // 点击一个按钮，弹出对话框
        // 1. 事件是有三部分组成  事件源  事件类型  事件处理程序   我们也称为事件三要素
        //(1) 事件源 事件被触发的对象   谁  按钮
        var btn = document.getElementById('btn');
        //(2) 事件类型  如何触发 什么事件 比如鼠标点击(onclick) 还是鼠标经过 还是键盘按下
        //(3) 事件处理程序  通过一个函数赋值的方式 完成
        btn.onclick = function() {
            alert('出现弹窗');
        }
    </script>
```

#### 执行事件的步骤

1. 获取事件源
2. 注册事件(绑定事件)
3. 添加事件处理程序(采取函数赋值形式)

```
    <div>点我</div>
    <script>
        // 执行事件步骤
        // 点击div 控制台输出 我被选中了
        // 1. 获取事件源
        var div = document.querySelector('div');
        // 2.绑定事件 注册事件
        // div.onclick 
        // 3.添加事件处理程序 
        div.onclick = function() {
            console.log('我被选中了');
        }
    </script>
```



#### 鼠标事件

| 鼠标事件    | 触发条件         |
| ----------- | ---------------- |
| onclick     | 鼠标点击左键触发 |
| onmouseover | 鼠标经过触发     |
| onmouseout  | 鼠标离开触发     |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动触发     |
| onmouseup   | 鼠标弹起触发     |
| onmousedown | 鼠标按下触发     |



### 操作元素

JavaScript 的 DOM 操作可以改变网页内容、结构和样式，我们可以利用 DOM 操作元素来改变元素里面的内容 、属性等。

注意：以下都是属性

#### 改变元素内容

##### innerText

从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉。

```
element.innerText
```

##### element.innerHTML

起始位置到终止位置的全部内容，包括HTML标签，同时保留空格和换行

```
element.innerHTML
```

##### 例子：

```

    <div></div>
    <p>
        我是文字
        <span>123</span>
    </p>

    <script>
        // innerText 和 innerHTML的区别 
        // 1. innerText 不识别html标签,去除空格和换行
        var div = document.querySelector('div');
        div.innerText = '<strong>今天是：</strong> 2019';
        // 2. innerHTML 识别html标签 保留空格和换行的
        div.innerHTML = '<strong>今天是：</strong> 2019';
        // 这两个属性是可读写的  可以获取元素里面的内容
        var p = document.querySelector('p');
        console.log(p.innerText);
        console.log(p.innerHTML);
    </script>

```



##### 案例：当鼠标点击按钮后，网页中出现现在的时间

```
    <button>显示当前系统时间</button>
    <div>某个时间</div>
    <p>123</p>
    <script>
        // 当点击显示当前系统时间按钮，div里面的文字需要发生变化
        // 1.获取元素
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        // 2.绑定时间
        btn.onclick = function(){
            // div.innerText = '2022-3-20';
            div.innerText = getTimes();
        }
        
        function getTimes() {
            var now = new Date();
            var year = now.getFullYear();   
            var month = now.getMonth() + 1;
            var day = now.getDate();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();
            // console.log('今天是'+year+'年'+month+'月'+day+'日'+hours+'点'+minutes+'分'+seconds+'秒');    
            return '今天是'+year+'年'+month+'月'+day+'日'+hours+'点'+minutes+'分'+seconds+'秒';
        }
        // 元素也可以不添加事件
        var p = document.querySelector('p');
        p.innerText = getTimes();
    </script>
```



#### 改变常用元素操作属性

1、src、href

2、alt 、title

###### 例子：img.属性   img.src = "xxx"，利用img属性的src元素，进行图片切换

```
    <button id="a">点击为a图片</button>
    <button id="b">点击为b图片</button>
    <img src="./images/A.png" alt="">

    <script>
        // 修改元素属性src的路径，已替换照片
        // 1、获取元素
        var a = document.getElementById('a');
        var b = document.getElementById('b');
        var img = document.querySelector('img')
        // 2、绑定事件
        b.onclick = function(){
            img.src = './images/B.png';
        }
        a.onclick = function(){
            img.src = 'images/A.png';
        }
    </script>
```

扩展：当鼠标悬浮时，修改图片标签中的`title`属性

```
    <button id="a">点击为a图片</button>
    <button id="b">点击为b图片</button>
    <img src="./images/A.png" title="A">

    <script>
        // 修改元素属性src的路径，已替换照片
        // 1、获取元素
        var a = document.getElementById('a');
        var b = document.getElementById('b');
        var img = document.querySelector('img');
        // 2、绑定事件
        b.onclick = function(){
            img.src = './images/B.png';
            img.title = 'B';
        }
        a.onclick = function(){
            img.src = 'images/A.png';
            img.title = 'A';
        }
    </script>
```



##### 案例：分时显示不同的图片，显示不同的问候语

根据不同时间，页面显示不同图片，同时显示不同的问候语

如果是上午时间打开页面时，显示下午好，显示A图片

如果是下午时间打开页面时，显示下午好，显示B图片

如果是晚上时间打开页面时，显示晚上好，显示C图片



思路：

1、根据系统不同时间来判断，所以需要用到日期内置对象

2、利用分支语句来设置不同的图片

3、需要一个图片，并且根据时间修改图片，需要用到操作元素src属性

4、需要一个div元素，显示不同的问候语，修改元素内容即可。

```
<img src="./images/A.png" alt="">
    <div>上午</div>
    <script>
        // 1、根据系统不同时间来判断，所以需要用到日期内置对象
        // 2、利用分支语句来设置不同的图片
        // 3、需要一个图片，并且根据时间修改图片，需要用到操作元素src属性
        // 4、需要一个div元素，显示不同的问候语，修改元素内容即可。
        // 1、获取元素
        var img = document.querySelector('img');
        var div = document.querySelector('div');
        // 2、得到当前的小时数
        var date = new Date();
        var h = date.getHours();
        // 3、判断小时数改变图片和文字信息。
        if( h < 12 ){
            img.src = './images/A.png';
            div.innerHTML = '上午';
        }else if( h < 18){
            img.src = './images/B.png';
            div.innerHTML = '下午';
        }else{
            img.src = './images/C.png';
            div.innerHTML = '晚上';
        }
    </script>
```



##### 修改表单的属性操作

利用DOM可以操作如下表单元素的属性

```
type，value，checked，selected，disabled
```



###### 例子：value ，disabled

```
    <button>按钮</button>
    <input type="text" value="输入内容">
    <script>
        // 1、获取元素
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        // 2、注册事件，处理程序
        btn.onclick = function(){
            // input.innerHTML = '已经惦记了';  innerHTML仅用于普通盒子，如果div便签里面的内容
            // input.innerHTML = '已经点击了';
            input.value = '被点击';
            // 如果某个表单被禁用，不能再点击 disabled ，需要按钮禁用，可以设置为
            // btn.disabled = true;
            this.disabled = true;   //this 指向的是事件函数的调用者 btn
        }
    </script>
```



#### 改变样式属性操作

我们可以通过 JS 修改元素的大小、颜色、位置等样式。

##### 行内样式操作

例子：

```

```

