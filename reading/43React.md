# React
> React是FaceBook(脸书)公司研发的一款js框架（MVC）

## React的脚手架
1. React是一款框架：具备自己开发的独立思想，（MVC：Model View Controller）  
+ 划分组件开发
+ 基于路由的SPA单页面开发
+ 基于ES6来编写代码（部署上线的时候需要将es6编译成es6，基于babel编译）
+ 可能用到less、sass等，我们也需要用到对应的插件来进行编译
+ 最后为了优化性能（减少http的请求次数）需要把js和css进行合并压缩
+ webpack来完成以上页面组件合并，js、css编译合并工作

2. 什么是前端工程化开发？
+ 基于框架的组件化、模块化开发
+ 基于webpack的自动部署

> 但是配置webpack是一个相对复杂的工作，我们需要自己安装很多包，还需要自己写相对复杂的配置文件，如果我们又一个插件，基于她可以快速的构建一整套的自动化工程项目结构，那么有助于提高开发效率------脚手架  
> Vue：vue-cli
> React：create-react-app  

3. create-react-APP的使用  
npm install create-react-app -g  
：把模块安装在全局环境下（目的：可以使用命令操作）  
怎么查找全局安装插件的根目录？：npm root -g  

> create-react-app [项目名称]  
基于脚手架命令，创建出一个基于react的自动化、工程化目录，和npm发包时候的命名规范一样，项目名称中不能出现：大写字母，中文汉字，特殊符号

```
/*
在REACT框架中，所有的逻辑都是在JS中完成的（包括页面结构的创建），如果想给当前的页面导入一些CSS样式或者IMG图片等内容，我们有两种方式：
1.在JS中基于ES6 Module模块规范，使用import导入，这样webpack在编译合并JS的时候，会把导入的资源文件等插入到页面的结构中（绝对不能在JS管控的结构中通过相对目录./或者../，导入资源，因为在webpack编译的时候，地址就不在是之前的相对地址了）
2.如果不想在JS中导入（JS中导入的资源最后都会基于WEBPACK编译），我们也可以把资源手动的在HTML中导入，但是HTML最后也要基于WEBPACK编译，导入的地址也不建议写相对地址，而是使用 %PUBLIC_URL% 写成绝对地址
<link rel="manifest" href="%PUBLIC_URL%/manifest.json">
<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
*/
```