# 三者的区别
1. var声明的变量会挂载在window上，而let和const声明的变量不会
2. var声明变量存在变量提升，let和const不存在变量提升
3. let和const声明形成块作用域
4. 同一作用域下let和const不能声明同名变量，而var可以
5. var定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问
6. let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问
7. const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改
8. 暂存死区：在当前块作用域中存在a使用let/const声明的情况下，给a赋值10时，只会在当前作用域找变量a，如果这时，还未到声明时候，所以控制台Error:a is not defined
9. const一旦声明必须赋值,不能使用null占位

+ 什么是作用域提升？let定义的变量，其作用域与用var定义的变量有什么区别？
+ 闭包传递时，与用var定义的变量有什么区别？
+ const到底指的是谁不能变？

```javascript
/*
为什么要新增const和let？
因为会存在变量作用域与提升

一般来说基本变量传递的时候都是传递的值但是在闭包里面就是传递的引用

const指向的对象本身不能变 但是对象里面的属性是可以变化的
*/
function fn() {
    // var str 这就是作用域提升
if(1){
var str="12345"//如果换成const会报错 str is not defined 这个就符合我们的逻辑了，在里面定义的变量在外面拿不到
}
    console.log(str);//在这里竟然可以拿到str  应该是undefined才对
}
fn()

//这个就是典型的闭包 从一个作用域里面引用了另一个作用域中本来看不到的变量
//使用let就会在闭包传参的时候永远传递的是值，不管是基本类型还是引用雷新刚
for (var i = 0; i <10 ; i++) {
    //虽然i是一个基本类型，但是闭包在使用的时候，不是传递的值，而是引用
    setTimeout(function () {
        console.log(i);//本来应该打印的是1-9 但是是10
    },100)
}
```