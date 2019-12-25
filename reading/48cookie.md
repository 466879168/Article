## cookie
会话跟踪技术  
> 会话 打开浏览器 开始浏览信息到结束浏览关闭浏览器 这样一个流程叫做会话
> 会话跟踪 浏览器与服务器进行多次请求数据时进行数据共享

cookie生存期  
默认生存期，会话结束浏览器关闭就结束了
cookie数据在浏览器中保存的时间document.cookie=“k=v;expires=标准格式时间”   
如果不设置cookie生存期，cookie数据会在会话结束后自动消失  
加入设置了cookie生存期，cookie数据会在cookie生存期  
+ 存
+ 取
+ 生存期
+ 删除
```javascript
//设置cookie的生存期为一天后过期
var d=new Date()
d.setDate(d.getDate()+1)
document.cookie="age=18;expires="+d
//删除数据
//1. 数据设置空字符串 生存期改为-1 也就是过时的意思
document.cookie="age='';expires=-1"
```