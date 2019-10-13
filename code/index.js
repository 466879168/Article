var x=1,
y=2;
function fn (x){
 y+=x;
 return function (z){
  console.log(z+(++x)+(--y))
 }
}
var f=fn(3);
f(4);
fn(5)(6)
f(7)




/**
 * new操作符做了哪些事情？
 * 1. 创建一个空对象
 * 2. 设置原型链
 * 3. 让this指向新创建的空对象，并且执行类的主体
 * 4. 判断返回值的类型，如果是值类型就返回新创建的对象，如果是引用类型，就返回这个引用类型的对象
 * //如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用
 */
/**
 * 
 * @param {*} obj 类
 * @param  {...any} args 剩余的参数
 */

function capyNew(obj,...args) {
    //1.创建一个空对象
     const newObj={};
     //2.让这个空对象的原型指向构造函数的prototype
     newObj.__proto=obj.prototype;
     //3.将obj的this改为新创建的这个对象
     let result=obj.apply(newObj,args)
     //4.判断类里面有返回值吗？返回值是对象吗?如果是的那那就返回类中的返回值，如果不是的话那就返回新创建的对象
     return typeof result === 'object' ? result : newObj
 }

//如果构造函数返回了一个“对象”，那么这个对象会取代整个new出来的结果。如果构造函数没有返回对象，那么new出来的结果为步骤1创建的对象。（一般情况下构造函数不返回任何值，不过用户如果想覆盖这个返回值，可以自己选择返回一个普通对象来覆盖。当然，返回数组也会覆盖，因为数组也是对象。


//prototype继承

//父类
function A(x) {
    this.x=x
}
A.prototype.getX=function(){
    console.log(this.x)
}
//子类
function B(x) {
    this.y=y
}
//B的原型指向A的实例
B.prototype=new A()
B.prototype.getY = function(){
    console.log(this.y)
}
let b1=new B(100)
b1.y
b1.getX()
//子类的实例想用父类上的方法该怎么做？
b1.getX()





//call继承




//父类
function A(x) {
    this.x=x
}
A.prototype.getX=function(){
    console.log(this.x)
}
//子类
function B(y) {
    A.call(this,y)
    this.y=y
}

B.prototype.getY = function(){
    console.log(this.y)
}
let b1=new B(100)
b1.y
b1.getX()
//子类的实例想用父类上的方法该怎么做？
b1.getX()




//寄生组合继承

//父类
function A(x) {
    this.x=x
}
A.prototype.getX=function(){
    console.log(this.x)
}
//子类
function B(y) {
    A.call(this,y)
    this.y=y
}
//Object.create创建一个空对象，让空对象的__proto__指向A.prototype
B.prototype=Object.create(A.prototype)
B.prototype.constructor = B
B.prototype.getY = function(){
    console.log(this.y)
}
let b1=new B(100)
b1.y
b1.getX()
//子类的实例想用父类上的方法该怎么做？
b1.getX()




//实现Object.create
Object.create=function (obj) {
    function F(){

    }
    Fn.prototype=obj;
    return new Fn()
}



//es6中继承

class A {
    constructor(x){
        this.x=x
    }
    getX(){
        console.log(this.x)
    }
}

class B extends A {
    //子类只要继承父类，可以不写constructor，一旦写了就要在第一句话中协商super（）
    //不写constructor 浏览器会自动默认创建constructor（...arg）{}
    constructor(y) {
        //把父类当做普通方法执行，给方法传递参数，让方法中的this是子类的实例
        super()
        this.y=y
    }
    getY(){
        console.log(y)
    }
}




//自己实现发布订阅模式
let _sub=function(){
    //sub发布订阅类
    class Sub{
        constructor(){
            //创建一个事件池，用来存储后期需要执行的方法
            this.pond=[]
        }
        //向事件池中追加方法
        add(func) {
            //重复处理
            let flag=this.pond.some(itme=>{
                return item === func
            })
            !flag?this.pond.push(func):null
        }
        //从事件池中移除方法
        remove(func) {
            let pond =this.pond
            for(let i=0;i<pond.length;i++){
                let item =pond[i]
                if (item === func) {
                    //移除（顺序不能变只能用splice）
                    //这样写会导致数组塌陷的问题，我们不能真的移除，只能把当前项赋值为null
                    // pond.splice(i,1)
                    pond[i]=null
                    break
                }
            }
        }
        //通知事件池中的方法，按照顺序依次执行
        fire(...args){
            let pond=this.pond
            for(let i=0;i<pond.length; i++){
                let item=pond[i]
                if (typeof item !== 'function') {
                    //此时再删除
                    pond.splice(i,1)
                    i--
                    continue
                }
                item.call(this,...args)
            }
        }
    }
    return function subscribe(){
        return new Sub()
    }
}()
let s1=_sub()




for(var i=0;i<10;i++){
    (function (num){
        setTimeout(function(){
            console.log(num)
        },10)
    })(i)
}
