## 布尔值
```typescript
let isDone:boolean=false
//new Boolean出来的是一个对象不是布尔值
let flag:boolean=new Boolean(1)//报错
```

## 数字
```typescript
let num:number=5
```

## 字符串
```typescript
let str:string="dylan"
```

## 空值void
> 用 void 表示没有任何返回值的函数  

```typescript
//没有任何返回值的函数用void表示
function alertName ():void {
alert("my name is dylan")
}
//声明一个void值没什么用，只能将他赋值为undefined
 let unusable:void=undefined
//void不能赋值为null
 let a:void=null
```

## null和undefined
```typescript
let u:undefined=undefined
let n:null=null
```

## 任意值Any
```typescript
//可以被赋值为任意值
//声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
let my:any="dylan"
my=7
//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
let str
str="dylan"
str=7
```

## 类型推断
> 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型

```typescript
let my="dylan"
my=7
//TS2322: Type '7' is not assignable to type 'string'.
//typeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论
//如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
let a
a=7
a="dylan"
```

## 联合类型
```typescript
let my:string|number
my="dylan"
my=7
//不能将类型“true”分配给类型“string | number”。
my=true
//当设置一个联合类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
//类型“string | number”上不存在属性“length”。类型“number”上不存在属性“length”
function getLength (some:string|number):number {
return some.length
}
//联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
let my:string|number
my="dylan"
console.log(my.length)
//类型“number”上不存在属性“length”
my=7
console.log(my.length)
```

## 接口interface
> TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述  

```typescript
//定义了一个接口 定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致
interface Person{
    name:string,
    age:number
}

let tom:Person={
    name:'tom',
    age:18
}


//定义的变量要和接口的数量一致少了的话会报错  多一些也是不允许的
interface Person{
    name:string,
    age:number
}
//Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.
let jerry:Person={
    name:'tom'
}
//可选属性 有时我们希望不要完全匹配一个接口属性  可选属性的含义是该属性可以不存在
interface Person{
    name:string,
    age?:number
}

let tom:Person={
    name:'tom'
}
//只读属性 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性
interface Person{
    readonly id:number
}
let tom:Person={
    id:555
}
//Cannot assign to 'id' because it is a read-only property
tom.id=5656
```

## 数组
```typescript
//使用「类型 + 方括号」来表示数组
//数组的项中不允许出现其他的类型
let arr:number[]=[1,2,3]
//也可以使用Array<string>表示
let ary:Array<string>=['a']
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
//类型“1”的参数不能赋给类型“string”的参数
ary.push(1)
```

## 类数组
```typescript
//类数组不能用数组的方法表示 要用接口的方法来表示
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
```

## 函数
```typescript
//在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式
//函数声明
function sum (x,y) {
return x+y
}

//函数表达式
let mySum=function  (x,y) {
return x+y
}
//一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到
//输入多余的参数或少的参数，是不被允许
function sum(x: number, y: number): number {
  return x + y;
}
//对函数表达式定义
//在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型 和es6中的不一样
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

//使用接口定义函数
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
//可选参数
//可选参数必须在必选参数的后面，也就是后面不能再有必选参数了
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```










```typescript

```
