# DOM操作
+ 获取元素或者元素集合
1. getElementById 根据ID获取元素，上下文只能是document，因为只有在document这个实例的原型链上才能找到这个方法，其他实例都找不到
2. getElementsByTagName 获取当前上下文中，所有子孙中标签名叫...的
3. getElementsByClassName IE6-8不兼容
4. getElementByName 在IE中只对表单元素的name有效果 上下文只能是document
5. querySelectorIE6-8不兼容  没有DOM映射
6. querySelectorAllIE6-8不兼容 没有DOM映射
7. document.documentElement
8. document.body
9. document.head

+ 描述节点和节点之间关系的属性
1. nodeTyoe nodeName nodeValue
2. 元素节点 1 大写标签名 null
3. 文本节点 3 #text 文本内容
4. 注释节点 8 #comment 注释内容
5. 文档节点 9 #doucment null
6. chidlNodes 所有子节点
7. children 所有元素子节点（IE6-8会把注释当做元素节点）
8. parentNode 父节点
9. previousSibling/previousElementSibling 兄弟节点
10. nextSibling 下一个兄弟节点
11. firstChild
12. lastChild

+ 动态操作DOM
1. createElement 创建元素
2. createDocumentFragment 创建了一虚拟的节点对象
3. appendChild 向元素的子节点末尾添加
4. insertBefore 子节点前面添加
5. cloneNode(true/false) 克隆子节点
6. removeChild 删除节点
7. set/get/removeAttribute 指定属性名的属性值

+ 零散
1. xxx.style.xxx=xxx
2. xxx.style.xxx
3. xxx.classNmae="xxx"

## js盒子模型属性
> 在js中通过相关的盒子属性可以获取元素的样式信息，这些属性就是盒模型属性  
+ client
  + top 获取上边框的宽度border
  + left 获取左边框的宽度 border
  + width 获取当前元素可视区域的宽高 width+padding
  + height 获取当前元素可视区域的宽高 height+padding
  + 和内容是否溢出无关，和是否设置了overflow无关，就是我们自己设置的宽高+padding
+ offset
  + top 获取当前盒子距离其父级参照物的偏移量
  + left 获取当前盒子距离其父级参照物的偏移量
  + width 在client的基础上加上border
  + height 在client的基础上加上border
  + 和内容溢出没有关系
  + parent 当前盒子的父级参照物 在网页上都是body
  + 参照物是可以改变的，构建出不同的平面即可（使用z-index）
+ scroll
  + top 向上滚出的高度
  + left
  + width 真实内容的宽高，
  + height 真实内容的宽高
  + 不一定是自己设置的值，因为课鞥会存在内容溢出，有内容溢出的情况下，需要把溢出的内容也算上+padding，而且是一个约等于的值
+ 通过js盒模型属性获取值的特点
  + 获取的数字不带单位
  + 获取的都是整数，不带小数
  + 获取的结果都是符合样式值（好几个元素的样式组合在一起的值）
+ 获取元素的样式值
  + xxx.style.xxx
  + 只能获取到写在元素行内的样式
+ 获取当前元素所有经过浏览器计算的样式
  + 经过计算的样式，只要当前元素可以在页面中显示，那么他的样式都是被计算过的
+ 标准浏览器
  + window。getComputedStyle（[元素]，[伪类，一般写null]）湖区鸥到当前元素所有被浏览器计算过的样式
+ ie6-8
  + [元素].currentStyle 获取经过计算的样式