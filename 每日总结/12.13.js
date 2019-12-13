/***
 *{
    path: '/emailSetting', 路径
    component: Layout,  要展示的组件
    redirect: '/emailSetting/emailTemplate', 重定向
    name: 'EmailSetting',
    1. name可以传递参数，设置之后，在组建中可以通过$route.name获取到值
    1.有那么之后在使用router-view的时候可以指定渲染某个组件<router-view name="Hello" /> 这样就只渲染这个组件
    authCode:'portrait',
    meta: {
      title: 'Email Promote', 页面的标题
      icon: 'setting',
      keepAlive: true 是否缓存
    },
    hidden: true,
    onlyOne:true,
 */

 //这个是异步方法
//require: 运行时调用，理论上可以运用在代码的任何地方，用require这种方式引入的时候，会将你的component分别打包成不同的js，加载的时候也是按需加载，只用访问这个路由网址时才会加载这个js
component: resolve => require(['../views/User/user.vue'], resolve)
//也是路由懒加载  这个是es提出来的 
const HelloWorld = ()=>import("@/components/HelloWorld")


let target={}
let proxy=new Proxy(target,{
  get:function (target,property) {
    return 35
  }
})

console.log(proxy.time);
console.log(proxy.name);
console.log(proxy.title);


let target={}
let proxy=new Proxy(target,{})
proxy.name="dylan"
console.log(proxy.name)
console.log(target.name)

target.name="yuanyuan"
console.log(proxy.name);
console.log(target.name);


let target={}
let proxy=new Proxy(target,{
  get(target,name){
    console.log("get",target,name);
    return Reflect.get(target,name)
  },
  deleteProperty(target,name){
    console.log("delete"+name);
    return Reflect.deleteProperty(target,name)
  },
  has(target,name){
    console.log("has"+name);
    return Reflect.has(target,name)
  }
})
proxy.name="proxy"
delete proxy.name
// name in proxy





function a(a) {
  return function b(b) {
    return function c(c) {
      return a*b*c
    }
  }
}
console.log(a(2)(3)(4));
