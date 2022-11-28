## 笔试题

##### 1.[数据类型]___如下代码，会弹出来是什么

```
var num1=“1” ;
var num2=1;
alert(num1-num2);
```

- A 0
- B 11
- C 1+1
- D 报错

```
A
解析:
相减,进行隐士转换,全部为数字
```



<hr>

##### 2.[数据类型]___如下代码，会弹出来是什么

```
 var num1=“hi”; 
 var num2=1; 
 alert(num1+num2);
```

- A hi1
- B 1
- C hi
- D 报错

```
A
解析:
字符串拼接
```



<hr>

##### 3.在JS中，`“1555”+3`的运行结果是

- A 1558
- B 1552
- C 15553
- D 1553

```
C
解析:
15553
```



<hr>

##### 4.`parseInt(“20.2aa”)` 返回值为

- A 20
- B 20.2
- C 20.2aa
- D NaN

```
A
解析:20
```



<hr>

##### 5.分析输出结果是

```
function sum(a){ 
	a = a + 2;
}
var res = sum(2);
console.log(res);
```

- A 2
- B 4
- C NaN
- D undefined

```
D
解析:
undefined
```



<hr>

##### 6.最终x的值为

```
var a = false;
var x = a ? “A” : “B”;
```

- A A

- B B

- C true

- D false

  

```
B
```



<hr>

##### 7.[变量]___下列变量名合法的是

- A 5show
- B return
- C $user
- D var

```
C
解析:
变量名不能以数字开头，A错；BD是关键字，C正确
```



<hr>



##### 8.[js引入]___需要在 html 页面上引用脚本文件myJs.js，下列语句中，正确的是

- A `<script href="myJs.js" type="text/javascript" />`
- B `<script src="myJs.js" type="text/javascript" />`
- C `<script href="myJs.js" type="text/javascript"></script>`
- D `<script src="myJs.js" type="text/javascript"></script>`

```
D
解析:
script 是双标签，src引入文件
```



<hr>

##### 9.[运算符]___代码的输出结果是

```
var a = 3;
var b = 2;
var c = (a+2)/b;
document.write(c);
```

- A 2.0
- B 2.5
- C 16.0
- D (3+2)/2

```
B
解析:
js弱类型，(2+3)/2=2.5
```



<hr>

##### 10.代码的输出结果是

```
function add(){
    var sum = 1 + 2 ;
    console.log( sum ) ;
}
console.log(sum) ;
```

- A 输出两个3
- B 输出一个3
- C 程序报错
- D 输出一个undefined

```
C
解析:
sum是局部变量，全局环境未定义
```



<hr>

##### 11.[数据类型]___`typeof null` 检测出来的数据类型是

- A null
- B number
- C object
- D undefined

```
C
解析:
null是空对象
```



<hr>

##### 12.`parseInt(“12a”)`的结果是

- A NaN
- B 12a
- C 0
- D 12

```
D
解析:
因为parseInt()的转换规则：跳过开头结尾的空字符，从左到右依次执行转换，碰到第一个不认识的数字则停止，所以答案为D
```



<hr>

##### 13.[表达式|运算符]___下列的哪一个表达式将返回假

- A !(3<=1)
- B (4>=4)&&(5<=2)
- C 2<3
- D (2<3)||(3<2)

```
B
解析:
&& 左右有一侧为假 ；整个表达式就为假
```



<hr>

##### 14.关于循环下列说法正确的是

- A while循环至少会运行一次
- B do…while循环至少会运行一次
- C for循环至少会运行一次
- D switch循环至少会运行一次

```
B
解析:
do…while 是先执行后判断，不管条件成不成立，都会至少执行一次
```

<hr>

##### 15.[循环||for循环]___以下代码的值

```
for(var i = 0; i < 10; i++){ 
	i++;
}
console.log(i);
```

- A 10
- B 9
- C undefined
- D 7

```
A
解析:
i++ 最终为10； 不小于10；结束for循环；此时i为10
```



<hr>

#####  16.下面代码的执行结果为


```
var a = 20;
function foo(){
    console.log(a) ;
    var a = 10 ;
    console.log(a) ;
}
foo();
```

- A 20 10
- B 10 10
- C 20 20
- D undefined 10

```
正确答案: D
解析:
函数中的a会变量提升；
所以第一个a是undefined；
a 赋值了10；
所以a 是10；
D选项是正确的
```

<hr>

##### 17.[js运算符]___有下述JS代码，其运行结果是

```
var x = 10; 
var y = 20;
var z = x<y ? x++ : ++y ;

console.log( ‘x=’ + x + ‘; y=’ + y + ‘; z=’ + z);
```

- A x=11; y=21; z=11
- B x=11; y=20; z=10
- C x=11; y=21; z=10
- D x=11; y=20; z=11

```
正确答案: B
解析:
x=11; y=20; z=10
```

<hr>

##### 18.查看如下代码，执行后的结果是

```
function f1( ){
	console.log(x);
   	var x = 10; 
   	++x;
   	console.log(x);	
}
f1();
```

- A 程序错误
- B undefined 和 10
- C undefined 和 11
- D 10 和 11

```
正确答案: C
解析:
undefined 和 11
```

<hr>

##### 19.如下代码，会弹出来是什么 `var a; alert(a);`

- A 报错
- B a is not define
- C undefined
- D 0

```
正确答案: C
解析:
变量提升
```

<hr>

##### 20.如下代码，会弹出来是什么 `alert(a);var a=12;`

- A 报错
- B a is not define
- C undefined
- D 12

```
正确答案: C
解析:
变量提升
```



<hr>

##### 21.JavaScript的组成不包括

- A ECMAScript
- B DOM
- C BOM
- D document

```
正确答案: D
```



<hr>

##### 22.`console.log( typeof 123 === “number”)`

- A 报错
- B true
- C false
- D 123

```
正确答案: B
解析:
得到字符串的"number", 所以类型和值都相等为全等
```

<hr>

##### 23.代码的输出结果是

```
function fnMax(a,b,c){
    var a,b,c;    
    var max = a > b ? a : b;
    if(c > max){ max = c; }
	alert(max);
}
fnMax(8,2,5);
```

- A 5
- B 2
- C 8
- D 10

```
正确答案: C
解析:
8,2,5中的最大值为8
```

<hr>

##### 24.如下代码，会弹出来是什么 

```
var num1=“1” ;
var num2=1 
alert(num1-num2);
```

- A 0
- B 11
- C 1+1
- D 报错

```
正确答案: A
解析:
相减,进行隐士转换,全部为数字
```

<hr>

##### 25.`console.log(typeof typeof 123456)`，在控制台中打印什么内容

- A 123456
- B number
- C string
- D object

```
正确答案: C
解析:
第一个 typeof 123456 返回 “number”
然后typeof “number” 返回"string"
```

<hr>

##### 26.[数据类型]___`console.log( (2==true)+1 )`会弹出

- A true
- B false
- C 1
- D 2

```
正确答案: C
```

<hr>

##### 27.[数据类型]___如下代码，会弹出来是什么 

```
var num1=“1”; 
var num2=1;
alert(num1+num2);
```

- A 2
- B 11
- C 1+1
- D 报错

```
正确答案: B
```

<hr>

##### 29.[数据类型]___下列表达式结果为false的是

- A !""
- B !{}
- C !undefined
- D !!5

```
正确答案: B
使用if去判断一个空对象结果仍然是true
```



<hr>

##### 30.[数组]___已知数组 `var arr = [1,2,3,4,5]`,执行 `arr.pop()` 后，数组的长度是

- A 4
- B 5
- C 6
- D 7

```
正确答案: A
解析:
arr.pop()是删除数组后一个数据
```

<hr>

##### 31.[数组]___`var array = new Array(5); array.push(8);` 数组array的长度是

- A 5
- B 6
- C 7
- D 8

```
正确答案: B
解析:
new Array(5);创建一个长度为5的空数组，push方法在数组后增加一位，结果为6
```

<hr>

##### 32.[BOM]___3秒后，图片消失，应该使用下面哪个方法

- A hide()
- B setTimeout()
- C ClearInterval
- D clearTimeout()

```
正确答案: B
解析:
setTimeout延时器
```

<hr>

##### 33.[DOM]___下面哪一个方法可以查找 class 名为 “xm”的元素

- A document.getElementsByClassName(“xm”)
- B document.getElementsByName(“xm”)
- C document.Class(“xm”)
- D document.ByName(“xm”)

```
正确答案: A
解析:
document.getElementsByClassName(“xm”);获取class为xm的元素
```

<hr>

##### 34.[js基础]___如果弹出一个可输入信息的框，可以使用哪一个方法

- A confirm()
- B prompt()
- C alert()
- D 以上都对

```
解析:B
prompt
```

<hr>

##### 35.[数组]___如何快速的将数组arr清空

- A arr.length = 0
- B arr = “”
- C arr.length = “”
- D arr.length = []

```
正确答案: A
解析:
强行将数组的length设置为0，可以清空数组
```

<hr>

##### 36.Math.floor(-3.14) 的结果是（ ）

- A -3.14
- B -3
- C -4
- D 3.14

```
正确答案: C
```

<hr>

##### 37.下面哪个是window窗口大小改变触发的事件

- A onmouseover
- B onresize
- C onmouseout
- D onclick

```
正确答案: B
```

<hr>

##### 38.判断下面的代码输出为

```
var a = 1; 
var b = a * 0; 
var a; 
if (b == b) { 
	console.log(b * 2 + “2”- 0 + 4);
} else { 
	console.log(!b * 2 + “2”- 0 + 4); 
}
```

- A 6
- B NaN
- C 22
- D 26

```
正确答案: A
```

<hr>

##### 39.请阅读下面代码 var num = Math.floor(Math.random()*100); 上述代码中`num`的取值范围是

- A 0–100
- B 1–99
- C 0–99
- D 1–100

```
正确答案: C
解析:
公式：Math.random()*(max-min+1)+min
```

<hr>

##### 40.[BOM]___下列哪个对象不属于bom对象

- A document
- B location
- C history
- D offsetWidth

```
正确答案: D
```

<hr>

##### 41.[数组]___`var arr = [3,4,6]`删除数组中的最后一项

- A arr.pop()
- B arr.pop(6)
- C arr.shift()
- D arr.shift(6)

```
正确答案: A
```

<hr>

##### 42.[数组]___以下代码结果是

```
var arr = [5,3,2,4]; 
var res = arr.splice(0);
console.log(res) 
```

- A [5,3,2,4]
- B [5]
- C [5,3]
- D [2,4]

```
正确答案: A
```

<hr>

##### 43.[数组]___实现数组的倒序方法

- A reverse()
- B sort()
- C join()
- D find()

```
正确答案: A
```

<hr>

##### 44.[数组]___以下代码输出的结果是

```
var str = “qianfengana”; 
var res = str.lastIndexOf(“a”); 
console.log(res); 
```

- A 9
- B 2
- C 7
- D 10

```
正确答案: D
```

<hr>

##### 45.添加节点的方法

- A 父节点.appendChild()
- B 父节点.append()
- C 父节点.prepend()
- D 父节点.prependChild()

```
正确答案: A
```

<hr>

##### 46.`var arr = [how,are,you]; arr.reverse(); alert(arr)`


- A how,are,you
- B you,are,how
- C h,o,w,a,r,e,y,o,u
- D u,o,y,e,r,a,w,o,h

```
正确答案: B
解析:
reverse翻转，直接修改原数组
```

<hr>

##### 47.下列关于innerHTML和innerText描述正确的是

- A innerHTML会被解析成html标签渲染，innerText是纯文本显示
- B innerHTML会发生转义如 < 会被转换成 < ，innerText原样渲染
- C innerHTML和innerText都会被解析成html标签渲染
- D innerHTML和innerText都是纯文本显示

```
正确答案: A
解析:
innerhtml不会发生转义
```

<hr>

##### 48.关于`setInterval(check ,10)`中说法正确的是

- A 程序循环执行10次
- B check函数每10秒执行一次
- C 10做为参数传给函数check
- D check函数每10毫秒执行一次

```
正确答案: D
解析:
基本定时器概念
```

<hr>

##### 49.获取从1970年/01/01 午夜到当前时间的毫秒值

- A getTime()
- B getDay()
- C setDate()
- D getDate()

```
正确答案: A
```

<hr>

##### 50.在HTML页面中，下列选项不属于鼠标相关事件的是

- A onclick
- B onmouseover
- C onmousedown
- D onchange

```
正确答案: D
```

<hr>

##### 51.以下哪个事件不存在

- A onclick
- B onblur
- C onlook
- D oninput

```
正确答案: C
A、点击事件
B、焦点离开事件
D、输入框输入事件
```

<hr>

##### 52.以下正则中不可以验证数字的是

- A /[0-9]/
- B /\D/
- C /0|1|2|3|4|5|6|7|8|9/
- D /\d/

```
正确答案: B
解析:
\D匹配的是非数字
```

<hr>

##### 53.[循环]___下列代码的执行结果是

```
for(var i = 0;i<10;i++){

} 
document.write(i);
```

- A 10
- B 11
- C 9
- D 死循环

```
正确答案: A
解析:
for(var i = 0;i<10;i++){}
document.write(i);
for循环结束，才会执行下一个语句，循环结束的条件就是i=10的时候；
```

<hr>

##### 54.以下哪个结果是正确的

```
var a=10; 
	b=20; 
	c=4;

++b + c + a++ 
```

- A 34
- B 35
- C 36
- D 37

```
正确答案: B
解析:
++ a 先运算 a++ 后运算
```

<hr>



## 多选题

##### 1.下面哪些是循环语句

- A while
- B do…while
- C for
- D switch

```
正确答案: A,B,C
```

<hr>

##### 2.下面哪些属于选择结构控制语句:

- A if
- B for
- C switch
- D while

```
正确答案: A,C
```



<hr>

##### 3.下面选项中数据类型为数字类型的有

- A “1”
- B 1
- C true
- D NaN

```
正确答案: B,D
```



<hr>

##### 4.下面语句得到值为true的有

- A “1” == 1
- B 1===“1”
- C “2” > “19”
- D “2”==19

```
正确答案: A,C

解析:
比较相等两个等号会有隐式类型转换，只需值相等即可，三个等号必须类型和值同时相等结果才为true，故A对B错

字符串之间的大小比较是按照ACSII编码大小，“2”的ASCII码比“1”的ASCII大，所以C正确

数字跟字符串比较大小会将字符串隐式转换为数字，即 2>19，D选项错误
```

<hr>

##### 5.下面语句得到值为数字2的有

- A 1 + ‘1’
- B 8 % ‘3’
- C ‘1’ + ‘1’
- D ‘4’ - 2

```
正确答案: B,D

解析:
A是字符串拼接，结果为：“11”; B“3”会隐式转换位3，结果为8%3=2；C为字符串拼接，结果为 “11”; D“4”会隐式转换为4，结果为4-2=2

故，答案为BD
```

<hr>

##### 6.下面哪些是关键字

- A var
- B function
- C case
- D 以上都是关键字

```
正确答案: A,B,C,D

解析:
var申明变量的关键字；function申明函数的关键字；case选择分支的关键字
故答案为ABCD
```

<hr>

##### 7.以下是JavaScript基本数据类型的是

- A Object
- B number
- C string
- D boolean

```
正确答案: B,C,D
解析:
Object是引用类型
```

<hr>

##### 8.以下运算符正确的是

- A ++
- B –
- C &&
- D >=

```
正确答案: A,B,C,D
解析:
自增、自减、逻辑与、大于或等于
```

<hr>

##### 9.JavaScript运算符都有哪些

- A 赋值运算符
- B 算术运算符
- C 关系运算符
- D 逻辑运算符

```
正确答案: A,B,C,D
解析:
赋值运算符=、数学运算符+ - * / %、一元运算符++ --、逻辑运算符&& || ！
```

<hr>

##### 10.JavaScript的基本组成包括

- A DOM
- B BOM
- C jQuery
- D ECMAScript

```
正确答案: A,B,D
解析:
JavaScript的基本组成包括DOM、BOM和ECMAScript
```

<hr>

##### 11.以下哪些属于循环语句

- A switch
- B for
- C while
- D do…while

```
正确答案: B,C,D
解析:
循环语句 有三个 for while do…while； switch是选择结构
```

<hr>

##### 12.函数的参数分为

- A 形参
- B 实参
- C 有参
- D 无参

```
正确答案: A,B
解析:
参数 分为实参和形参
```



<hr>

##### 14.函数中实参可以是

- A 常量
- B 变量
- C 只能是变量
- D 只能是常量

```
正确答案: A,B
解析:
实参可以是变量 常量 ，形参只能是变量
```

<hr>

##### 15.逻辑运算符有

- A >
- B <
- C ||
- D &&

```
正确答案: C,D
解析:
逻辑运算符有三个 && || ！；AB选项是比较
```



<hr>

##### 17.下面声明变量及赋值的写法正确的有

- A var _myName = 12a
- B var _myName = “12a”
- C var myName = 12
- D var $myName = true

```
正确答案: B,C,D
解析:
A选项 12a是字符串，不是纯数字，字符串要用引号
```

<hr>

##### 18.下面哪些方法可以实现将字符串"123"，变成数值型

- A Number()
- B parseInt()
- C parseFloat()
- D Boolean()

```
正确答案: A,B,C
解析:
Boolean()转成布尔值
```

<hr>

##### 19.下面哪些属于关系运算符？

- A >
- B >=
- C <
- D <=

```
正确答案: A,B,C,D
```

<hr>

##### 20.下面哪些属于逻辑运算符？

- A &&
- B ||
- C !
- D 以上都不正确

```
正确答案: A,B,C
```

<hr>

##### 21.数组添加元素的方法有

- A push
- B pop
- C slice
- D unshift

```
正确答案: A,D
```

<hr>

##### 22.在JavaScript中，以下哪条语句能隐藏id为flower的div

- A document.getElementById(“flower”).style.display=“none”;
- B document.getElementById(“flower”).style.display=“hidden”;
- C document.getElementById(“flower”).style.visibility=“none”;
- D document.getElementById(“flower”).style.visibility=“hidden”

```
正确答案: A,D
解析:
display属性没有hidden的值；
visibility属性没有none的值
```

<hr>

##### 23.下列哪些方式可以遍历数组

- A for
- B for-in
- C for-by
- D switch

```
正确答案: A,B
解析:
for为常用循环语句，for-in主要用来遍历非数组对象，但是也可以遍历数组
```

<hr>

##### 24.下列哪些是字符串的方法

- A replace()
- B split()
- C join()
- D indexOf()

```
正确答案: A,B,D
解析:
replace是替换，split是根据指定字符串分割字符成数组，indexOf是根据指定字符返回索引，join是将数组转成字符串
```

<hr>

##### 25.下列哪些是数组的方法

- A charAt()
- B sort()
- C push()
- D filter()

```
正确答案: B,C,D
解析:
sort是数组的排序，push是在数组最后一位新增，filter可以对数组进行遍历的同时筛选数据，charAt可以根据指定的索引返回字符，不是数组的方法
```

<hr>

##### 26.以下哪些将数组转为字符串的方法

- A join()
- B toString()
- C split()
- D concat()

```
正确答案: A,B
解析:
solit是将字符分割成数组，concat是合并数组
```

<hr>

##### 27.开启定时器和延时器的方法有

- A clearInterval（）
- B setTimeOut（）
- C setTimeout（）
- D setInterval（）

```
正确答案: C,D
```

<hr>

##### 28.下列方法能截取字符串片段的是

- A substr()
- B substring()
- C split()
- D slice()

```
正确答案: A,B,D
解析:
split是分割字符串，其他都可以截取
```

<hr>

##### 29.window对象的内置对象有哪些

- A document
- B history
- C href
- D location

```
正确答案: A,B,D
解析:
document为window的文档对象，history为window的历史记录对象，location为window的url对象
```

<hr>

##### 30.更改h1标签内容可以用以下哪个属性

- A innerText
- B valueof
- C innerHTML
- D value

```
正确答案: A,C
```

<hr>

##### 31.以下字符串方法支持正则表达式的有哪些

- A indexOf
- B match
- C replace
- D search

```
正确答案: B,C,D
解析:
字符串的一些方法是和正则一起使用比较多的，比如match（）匹配、replace（）替换、search（）查找
```

<hr>

##### 32.下面表示鼠标事件的有

- A onclick
- B onmouseover
- C onmouseout
- D onmousemove

```
正确答案: A,B,C,D
解析:
onchange是当内容改变时触发，触发调用函数writeIt（），该函数的功能就是将第二个文本框的内容复制给第一个文本框。
```

