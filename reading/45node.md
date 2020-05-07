# node 

## 什么是node？
基于v8引擎（谷歌浏览器的引擎）渲染js的工具或者环境

## 如何在node中渲染和解析js
repl模式：（read-evaluate-print-loop）输入-求值-输出-循环

## 为什么把node称为后台语言？
1. 我们可以把node安装在服务器上
2. 我们可以把编写的js代码放到服务器上，通过node来执行它，（我们可以使用js来操作服务器，换句话说没使用js来实现服务器端的一些操作，其实说node是后台语言，是想要表达js是后台语言）

## node做后台的优势和特点
传统后台语言：java、Python、PHP、c#(.net)  
1. node是单线程的
2. 基于v8引擎渲染（快）
3. 异步无阻塞的I/O操作（input/output）对文件的读写
4. event-driven事件驱动：类似于发布订阅或者回调函数

## npm使用
+ npm install xxx 把模块安装在当前目录下
+ npm uninstall xxx   卸载模块
+ npm install xxx@xxx 安装指定版本号的模块
+ npm -V 查看模块的版本
+ npm view  xxx>xxx.version.txt 查看模块的历史版本信息输出到指定的文件中
+ npm init -y 生成默认的package.json文件

## 安装全局和局部的区别
1. 安装在全局的特点
   1. 所有的项目都可以使用这个模块
   2. 容易导致版本冲突
   3. 安装在全局的模块，不能基于commonjs模块规范调取使用
2. 安装在本地的特点
   1. 只能当前项目使用这个模块
   2. 不能直接的使用命令操作

## 执行脚本的操作
1. 首先到配置清单的script中查找
2. 找到把后面对应的属性值(执行脚本)执行
3. 执行脚本的时候，回到本地node——modules中的bin中查找，没有的话，再向npm安装的全局目录下查找

## node模块
node本身是基于commonJS模块规范设计的，所以模块是node的组成
+ 内置模块：node天生提供给js调取使用
+ 三方模块：别人写好的，我们可以基于npm安装使用
+ 自定义模块：自己创建一些模块

## commonJS模块化设计的思想
1. commonjs规定，每一个js都是一个单独的模块（模块是私有的，里面涉及的值和变量以及函数都是私有的，和其他js文件中的内容是不冲突的）
2. commonJS中可以允许模块中的方法互相调用
   1. 导出：commonJS给每一个模块中都设置了内置的变量和方法，其中module当前这个模块对象
   2. module.exports 模块的这个属性是用来导出属性方法的
   3. exports是内置的一个变量，也是用来导出当前模块属性方法的
   4. 两者不是一样的东西，但是指向的地址是一样的（module.exports对象的地址等于exports这个对象的地址）
   5. 导入：require：commonJS提供的一个内置变量，用来导入模块，其实导入的就是module.exports导出的东西，导入的值也是对象
3. 所有代码都运行在模块作用域，不会污染全局作用域（每一个模块都是私有的，里面的所有东西都是私有的，不会和其他的模块产生干扰）
4. 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。（为了保证性能，减少模块代码重复执行的次数）
5. 模块加载的顺序，按照其在代码中出现的顺序。CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作

## node内置模块fs（实现I/O操作）
1. fs.mkdir/fs.mkdirSync创建文件夹
2. fs.readdir/fs.readdirSync 读取文件目录中的内容
3. fs.rmdir 删除文件夹（有文件的话就会报错）
4. fs.readFile读取文件中的内容
5. fs.writeFile 向文件中写入内容（覆盖式写入，写入的新内容会替换原有的内容）
6. fs.appendFile追加写入新内容，原有的内容还在
7. fs.copyFile拷贝文件到新的位置
8. fs.unlink删除文件

```JavaScript
fs.readFile('./01.html',"utf8",function(){})
//不设置utf-8编码格式，读取的是buffer格式的数据，设置后读取到的是字符串格式的数据
let result=fs.readFileSync('./01.html',"utf8")
```

## path 
+ path.resolve()返回当前模块的绝对地址（不包含模块的名称）在哪里执行路径指的就是那里，__dirname在哪里定义，路径就是那里

## node框架
express/koa