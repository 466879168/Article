# css居中的一些方案
## 水平居中
1.行内元素水平居中，外面的父级块元素设置样式text-align:center;  
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title></title>
	</head>
	<style type="text/css">
		div{
			width: 400px;
			height: 400px;
			background: lightblue;
			margin:200px auto;
			text-align: center;
		}
	</style>
	<body>
		<div>
			<span>
				我是行内元素
			</span>
		</div>
	</body>
</html>
```  
效果图如下：  
![](https://raw.githubusercontent.com/466879168/Figure-bed/master/images/01.png)  
2.块级元素的水平居中  
方法一：设置左右两边的margin为auto即可  
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title></title>
	</head>
	<style type="text/css">
		.wrap{
			width: 400px;
			height: 400px;
			background: lightblue;
			margin:200px auto;
		}
		.inter{
			width: 100px;
			height: 100px;
			margin: 0 auto;
			border: 1px solid red;
		}
	</style>
	<body>
		<div class="wrap">
			<div class="inter">
				我是内部的块级元素
			</div>
		</div>
	</body>
</html>
```  
效果图如下：  
![](https://raw.githubusercontent.com/466879168/Figure-bed/master/images/02.png)  
方法二:css3新属性fit-content意思是宽度缩小到和内容一样宽配合margin:auto;
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title></title>
		<style type="text/css">
			.parent{
				width:fit-content;/* 表示宽度自适应缩小到内容的宽度*/
				margin: 0 auto;
			}
			.son{
				float: left;
				border: 1px solid #F08080;
			}
		</style>
	</head>
	<body>
		<div class="parent">
			<div class="son">
				我是内部的元素
			</div>
		</div>
	</body>
</html>
```  
效果图如下：  
![](https://raw.githubusercontent.com/466879168/Figure-bed/master/images/03.png)  
方法三：弹性盒子布局flex  
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title></title>
		<style type="text/css">
			.parent{
				width: 400px;
				height: 400px;
				background: lightblue;
				display: flex;
				justify-content: center;
			}
			.son{
				width: 100px;
				height: 100px;
				border: 1px solid red;
			}
		</style>
	</head>
	<body>
		<div class="parent">
			<div class="son">
				我是内部的元素
			</div>
		</div>
	</body>
</html>
```  
效果图如下：  
![](https://raw.githubusercontent.com/466879168/Figure-bed/master/images/04.png)  
方法四：绝对定位  可以用left50% margin-left负自身的一般和transform和margin三种
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title></title>
		<style type="text/css">
		.parent{
			position: relative;
			width: 400px;
			height: 400px;
			background: lightblue;
		}
		.son{
			position: absolute;
			/* left: 50%; */
			/* margin-left: -50px; */
			/* transform: translate(-50%,0); */
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			width: 100px;
			height: 100px;	
			border: 1px solid red;
		}
		</style>
	</head>
	<body>
		<div class="parent">
			<div class="son">
				我是内部的元素
			</div>
		</div>
	</body>
</html>
```  
效果图如下：  
![](https://raw.githubusercontent.com/466879168/Figure-bed/master/images/05.png)  

## 垂直居中  
1.行内元素  
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title></title>
		<style type="text/css">
		.parent{
			width: 400px;
			height: 400px;
			line-height: 400px;
			background: lightblue;
		}
		span{
			/* line-height: 400px; */
		}
		</style>
	</head>
	<body>
		<div class="parent">
			<span>
				我是内部的元素
			</span>
		</div>
	</body>
</html>
```  
效果图如下：  
![](https://raw.githubusercontent.com/466879168/Figure-bed/master/images/06.png)  
2.块级元素  table布局  
table布局优缺点：  
元素高度可以动态改变, 不需再CSS中定义, 如果父元素没有足够空间时, 该元素内容也不会被截断 
IE6~7, 甚至IE8 beta中无效
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title></title>
		<style type="text/css">
		.parent{
			width: 400px;
			height: 400px;
			background: lightblue;
			display: table;
		}
		.son{
			display: table-cell;
			vertical-align: middle;
		}
		</style>
	</head>
	<body>
		<div class="parent">
			<div class="son">
				我是内部的元素
			</div>
		</div>
	</body>
</html>
```  
效果如下:  
![](https://raw.githubusercontent.com/466879168/Figure-bed/master/images/07.png)  
方法二：flex布局  
flex布局优缺点：  
内容块的宽高任意, 优雅的溢出，可用于更复杂高级的布局技术中  
IE8/IE9不支持，需要浏览器厂商前缀，渲染上可能会有一些问题  
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title></title>
		<style type="text/css">
		.parent{
			width: 400px;
			height: 400px;
			background: lightblue;
			display: flex;
			align-items: center;
		}
		</style>
	</head>
	<body>
		<div class="parent">
			<div class="son">
				我是内部的元素
			</div>
		</div>
	</body>
</html>
```  
效果如下：  
![](https://raw.githubusercontent.com/466879168/Figure-bed/master/images/08.png)  
方法三：同上的绝对定位的三种方法  
transform优缺点：  
代码少，简洁  
E8不支持, 属性需要追加浏览器厂商前缀, 可能干扰其他 transform 效果, 某些情形下会出现文本或元素边界渲染模糊的现象  
margin优缺点：  
简单  
没有足够空间时, 子元素会被截断, 但不会有滚动条