# this关键字

## this怎么来的？
js在创建上下文执行的时候就生成了this  
非严格模式下浏览器---window，严格模式下浏览器---undefined，终端node---global

## this介绍
+ 如果一个函数有this，但是它没有被上一级对象调用，那么this指向的就会是window
+ 如果一个函数有this，尽管这个函数是被最外层的对象所调用的，this还是会指向他的上一级对象
+ 如果一个函数有this，但是它没有被上一级对象调用，那么this指向的就是window

## 改变this指向
call和apply方法使用基本一致，区别在于传参的写法上面有所区别（返回的是一个值？，所以不需要在调用了）  
bind方法的返回是一个修改过this后的函数，函数就需要用（）调用  
使用bind方法给一个函数进行this作用域绑定，他是一个永久的绑定，会覆盖掉call和apply的指向

## this和return 
如果返回的是一个对象，那么this就指向返回的对象，如果返回的不是对象，那么this还是指向原来的实例