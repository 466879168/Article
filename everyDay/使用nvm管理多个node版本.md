## 使用nvm管理多个node版本  
最近有一个项目中需要用到node10以下的版本，而当前电脑上安装的是12+，为了使用方便就是用nvm管理电脑上的node版本  
### 安装：
1. github上面下载最新版本：[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)
2. 百度网盘下载：[https://pan.baidu.com/s/1vQTzwl6wUnuJlq6pRL5W8A](https://pan.baidu.com/s/1vQTzwl6wUnuJlq6pRL5W8A) 提取码：7ih8  

安装就是傻瓜式安装，相信大家都会  

### 使用
安装成功之后检测下是否安装成功，如显示下图有版本号和各种帮助信息的话就是安装成功：  
![](https://figure-bed-1258489075.cos.ap-nanjing.myqcloud.com/img/Snipaste_2020-01-11_00-42-32.png)  
然后就是nvm中常用的命令了：  
+ nvm version 显示当前的nvm版本 可以简写为nvm v
+ nvm ls 列出所有已经安装好的node版本
+ nvm list available 列出所有可以安装的node版本
+ nvm install 10.4.0 安装指定版本号的node
+ nvm use v10.3.0 切换到这个node版本使用，全局改变
+ nvm current 当前的node版本
+ nvm on 启用node.js版本管理
+ nvm off 禁用node.js版本管理(不卸载任何东西)
+ nvm uninstall <version> 卸载指定版本的node
+ nvm node_mirror [url] 设置node镜像，默认为https://nodejs.org/dist/.可以设置为淘宝的镜像https://npm.taobao.org/mirrors/node/
+ nvm npm_mirror [url] 设置npm镜像，默认为https://github.com/npm/npm/archive/可以设置为淘宝的镜像